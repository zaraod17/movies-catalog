import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/contexts/AuthContext";
import UserDetails from "@/components/UserDetails/UserDetails";

const UserDetailsPage: React.FC = () => {
  const router = useRouter();
  const { token, userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace("/");
    }
  }, [router, token, userInfo.email]);

  return (
    <>
      <UserDetails />
    </>
  );
};

export default UserDetailsPage;
