import { useEffect } from "react";
import { useQuery } from "react-query";
import { useAxios } from "../../context/AxiosContext";
import { MovieData } from "../../types";

export const useGetMovies = () => {
  const axios = useAxios();

  const fetchMovies = async (): Promise<MovieData | undefined> => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MOVIES_URL}?populate=*`
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery("fetchMovies", async () => await fetchMovies(), {
    onError: (error) => console.log(error),
    staleTime: Infinity,
  });
};
