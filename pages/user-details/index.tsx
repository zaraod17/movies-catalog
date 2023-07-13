import { useContext, useEffect } from "react";
import {  useRouter } from "next/router";

import UserDetails from "@/components/UserDetails/UserDetails";

import { AuthContext } from "@/contexts/AuthContext";

const UserDetailsPage: React.FC = () => {
  const router = useRouter();
  const { token, userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace('/');
    }
  }, []);

  return (
    <>
      <UserDetails />
    </>
  );
};

export default UserDetailsPage;
