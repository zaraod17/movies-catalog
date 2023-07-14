import MainPageLists from "@/components/MainPageLists/MainPageLists";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/contexts/AuthContext";

const Home: React.FC = () => {
  const router = useRouter();
  const { token, userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace("/");
    }
  }, [router, token, userInfo.email]);
  return (
    <>
      <MainPageLists />
    </>
  );
};

export default Home;
