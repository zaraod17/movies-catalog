import React, { createContext, useState, useEffect } from "react";
import { useLazyQuery, useMutation, ApolloError } from "@apollo/client";
import { LOGIN, REGISTER } from "@/utils/api/api-client-queries";

import {
  AuthResponseType,
  TokenPayloadType,
  RegisterResponseType,
} from "./AuthContext.types";

import jwt from "jsonwebtoken";

interface LoginContextType {
  openModal: boolean;
  handleLogout: () => void;
  handleModal: (value: boolean) => void;
  getToken: (email: string | undefined, password: string | undefined) => void;
  registerUser: (
    email: string | undefined,
    username: string | undefined,
    password: string | undefined
  ) => void;
  userInfo: TokenPayloadType;
  loginError: string;
  token: string;
}

export const AuthContext = createContext<LoginContextType>({
  handleLogout: () => {},
  handleModal: () => {},
  openModal: false,
  getToken: () => {},
  registerUser: () => {},
  userInfo: { id: 0, email: "", exp: 0, iat: 0 },
  loginError: "",
  token: "",
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
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token") ?? "";
    const decodedToken: TokenPayloadType | null = token
      ? (jwt.decode(storedToken) as TokenPayloadType)
      : null;

    const timeInMilisecs = new Date().getTime();
    const expirationTimeInMilisecs = (decodedToken?.exp ?? 0) * 1000;

    if (expirationTimeInMilisecs > timeInMilisecs) {
      setTokenPayload(decodedToken!);
      setToken(storedToken);
    } else {
      localStorage.removeItem("token");
    }
  }, []);

  const [getToken] = useLazyQuery(LOGIN, {
    onError: (error) => {
      setLoginError(error.message);
    },
    onCompleted: (data) => {
      setLoginError("");
      localStorage.setItem("token", data.login.token);
      handleModal(false);

      setTokenPayload(jwt.decode(data.login.token) as TokenPayloadType);
      setToken(data.login.token);
    },
  }) as AuthResponseType;

  const [registerUser] = useMutation(REGISTER, {
    onError: (error) => {
      setLoginError(error.message);
    },
    onCompleted: (data) => {
      setLoginError("");
      localStorage.setItem("token", data.register.token);
      handleModal(false);

      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setTokenPayload(jwt.decode(storedToken) as TokenPayloadType);
        setToken(storedToken);
      }
    },
  }) as RegisterResponseType;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTokenPayload({ email: "", id: 0, exp: 0, iat: 0 });
    setToken("");
    console.log(tokenPayload);
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
    setLoginError("");
  };

  const contextValue: LoginContextType = {
    handleLogout,
    openModal,
    handleModal,
    getToken: (email, password) => {
      getToken({ variables: { email: email || "", password: password || "" } });
    },
    userInfo: tokenPayload,
    registerUser: (email, username, password) => {
      registerUser({ variables: { email, username, password } });
    },
    loginError,
    token,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
