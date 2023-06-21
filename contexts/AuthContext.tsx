import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery, ApolloError } from "@apollo/client";
import { LOGIN } from "@/utils/api-client-queries";

import { AuthResponseType, TokenPayloadType } from "./AuthContext.types";

import jwt from "jsonwebtoken";

interface LoginContextType {
  login: boolean;
  openModal: boolean;
  handleLogin: (value: boolean) => void;
  handleModal: (value: boolean) => void;
  getToken: (email: string | undefined, password: string | undefined) => void;
  userInfo: TokenPayloadType;
}

export const AuthContext = createContext<LoginContextType>({
  login: false,
  handleLogin: () => {},
  handleModal: () => {},
  openModal: false,
  getToken: () => {},
  userInfo: { id: 0, email: "", exp: 0, iat: 0 },
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tokenPayload, setTokenPayload] = useState<TokenPayloadType>({
    email: "",
    id: 0,
    exp: 0,
    iat: 0,
  });

  const [getToken, { loading, error, data }] = useLazyQuery(
    LOGIN
  ) as AuthResponseType;

  useEffect(() => {
    if (data && data.login) {
      localStorage.setItem("token", data.login.token);

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenPayload(jwt.decode(storedToken) as TokenPayloadType);
      }
    }
  }, [data]);

  const handleLogin = (value: boolean) => {
    setLogin(value);
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
    console.log(tokenPayload);
  };

  const contextValue: LoginContextType = {
    login,
    handleLogin,
    openModal,
    handleModal,
    getToken: (email, password) => {
      getToken({ variables: { email: email || "", password: password || "" } });
    },
    userInfo: tokenPayload,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
