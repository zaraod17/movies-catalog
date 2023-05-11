import { ReactNode } from "react";

import { AuthContextProvider } from "@/contexts/AuthContext";

import NavBar from "@/components/Navbar/NavBar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
      </AuthContextProvider>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
