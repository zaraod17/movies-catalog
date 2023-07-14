import { useContext, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { useRouter } from "next/router";

import { CircularProgress } from "@mui/material";
import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { AuthContext } from "@/contexts/AuthContext";
import { USER_LIST_MOVIES } from "@/utils/api/api-client-queries";

interface UserListMovies {
  loggedUser: {
    myList: {
      id: string | number;
      title: string;
      imgUrl: string;
      productionYear: number;
      numberOfRatings: number;
      sumOfRatings: number;
      description: string;
      trailerUrl: string;
      actors: string[];
      categories: string[];
    }[];
  };
}

const WatchListPage: React.FC = () => {
  const { token, userInfo } = useContext(AuthContext);
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: UserListMovies } = useQuery(
    USER_LIST_MOVIES,
    {
      context: {
        headers: {
          authorization: token,
        },
      },
      variables: { email: userInfo.email },
    }
  );

  const router = useRouter();

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace("/");
    }
  }, [router, token, userInfo.email]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <MoviesGrid items={data?.loggedUser.myList!} />
    </>
  );
};

export default WatchListPage;
