import { createContext, createElement, useContext, useMemo } from "react";
import Axios, { AxiosInstance } from "axios";
import { useUser } from "./UserContext";

export const AxiosContext = createContext<AxiosInstance>(Axios);

export const useAxios = () => {
  const axiosContext = useContext(AxiosContext);

  if (axiosContext === undefined) {
    throw new Error("useAxios must be inside of its provider");
  }
  return axiosContext;
};

export const AxiosProvider = ({
  children,
}: React.PropsWithChildren<unknown>) => {
  //const refreshToken = customRefreshHook();
  const { user, jwt } = useUser();

  const auth = useMemo(() => {
    const axios = Axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

    //request interceptor
    axios.interceptors.request.use((config) => {
      if (user && config.headers) {
        console.log(jwt);
        config.headers.Authorization = `Bearer ${jwt || user.jwt}`;
      }

      return config;
    });

    //response interceptor
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          //refresh token mutation
          console.log("Your access token expired");
        }
      }
    );

    return axios;
  }, [user, jwt]);
  // it should have refresh token in dep.array

  return <AxiosContext.Provider value={auth}>{children}</AxiosContext.Provider>;
};
