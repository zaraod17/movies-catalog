import { ReactNode } from "react";

import NavBar from "@/components/Navbar/NavBar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
