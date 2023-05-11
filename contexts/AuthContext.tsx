import React, { createContext, useState } from "react";

interface LoginContextType {
  login: boolean;
  openModal: boolean;
  handleLogin: (value: boolean) => void;
  handleModal: (value: boolean) => void;
}

export const AuthContext = createContext<LoginContextType>({
  login: false,
  handleLogin: () => {},
  handleModal: () => {},
  openModal: false,
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [login, setLogin] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleLogin = (value: boolean) => {
    setLogin(value);
  };

  const handleModal = (value: boolean) => {
    setOpenModal(value);
  };

  const contextValue: LoginContextType = {
    login,
    handleLogin,
    openModal,
    handleModal,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
