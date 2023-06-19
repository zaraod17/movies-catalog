import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery, ApolloError } from "@apollo/client";
import { LOGIN } from "@/utils/api-client-queries";

import { AuthResponseType } from "./AuthContext.types";

interface LoginContextType {
  login: boolean;
  token: string | undefined;
  openModal: boolean;
  handleLogin: (value: boolean) => void;
  handleModal: (value: boolean) => void;
  getToken: (email: string | undefined, password: string | undefined) => void;
}

export const AuthContext = createContext<LoginContextType>({
  login: false,
  token: "",
  handleLogin: () => {},
  handleModal: () => {},
  openModal: false,
  getToken: () => {},
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [token, setToken] = useState<string | undefined>("");

  const [getToken, { loading, error, data }] = useLazyQuery(LOGIN) as AuthResponseType;

  useEffect(() => {
    if (data && data.login) {
      localStorage.setItem('token', data.login.token);
      setToken(data.login.token);
    }
  }, [data]);

  const handleLogin = (value: boolean) => {
    setLogin(value);
  };
  
  const handleModal = (value: boolean) => {
    setOpenModal(value);
    console.log(token);
  };

  const contextValue: LoginContextType = {
    login,
    token,
    handleLogin,
    openModal,
    handleModal,
    getToken: (email, password) => {
      getToken({ variables: { email: email || "", password: password || "" } });
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
