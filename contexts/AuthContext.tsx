import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery, ApolloError } from "@apollo/client";
import { LOGIN } from "@/utils/api-client-queries";

import { AuthResponseType, TokenPayloadType } from "./AuthContext.types";

import jwt from "jsonwebtoken";

interface LoginContextType {
  openModal: boolean;
  handleLogout: () => void;
  handleModal: (value: boolean) => void;
  getToken: (email: string | undefined, password: string | undefined) => void;
  userInfo: TokenPayloadType;
  loginError: string;
}

export const AuthContext = createContext<LoginContextType>({
  handleLogout: () => {},
  handleModal: () => {},
  openModal: false,
  getToken: () => {},
  userInfo: { id: 0, email: "", exp: 0, iat: 0 },
  loginError: "",
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [tokenPayload, setTokenPayload] = useState<TokenPayloadType>({
    email: "",
    id: 0,
    exp: 0,
    iat: 0,
  });
  const [loginError, setLoginError] = useState<string>("");

  const [getToken, { loading, error, data }] = useLazyQuery(
    LOGIN
  ) as AuthResponseType;

  useEffect(() => {
    if (data && data.login) {
      setLoginError("");
      localStorage.setItem("token", data.login.token);

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenPayload(jwt.decode(storedToken) as TokenPayloadType);
      }
    }

    if (error) {
      setLoginError(error.message);
    }
  }, [data, error]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTokenPayload({ email: "", id: 0, exp: 0, iat: 0 });
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
    console.log(tokenPayload);
  };

  const contextValue: LoginContextType = {
    handleLogout,
    openModal,
    handleModal,
    getToken: (email, password) => {
      getToken({ variables: { email: email || "", password: password || "" } });
    },
    userInfo: tokenPayload,
    loginError,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
