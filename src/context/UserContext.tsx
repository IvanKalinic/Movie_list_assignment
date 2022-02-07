import React, { createContext, useContext, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type ContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  jwt: string;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
};

const UserContext = createContext<ContextType>({
  user: null,
  setUser: () => null,
  jwt: "",
  setJwt: () => null,
});

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("useUser must be inside of its provider");
  }
  return userContext;
};

interface Props {
  children: React.ReactChild;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [jwt, setJwt] = useState<string>("");

  const value = useMemo(
    () => ({ user, setUser, jwt, setJwt }),
    [user, setUser, jwt, setJwt]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
