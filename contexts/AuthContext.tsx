import React, { createContext, useState } from "react";
import { useLazyQuery, ApolloError } from "@apollo/client";
import { LOGIN } from "@/utils/api-client-queries";

interface LoginContextType {
  login: boolean;
  token: string;
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
  const [token, setToken] = useState<string>("");

  const [getToken, { loading, error, data }] = useLazyQuery(LOGIN);

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
      getToken({ variables: { email, password } });
      setToken(data.login.token);
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
