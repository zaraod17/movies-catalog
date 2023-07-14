import { useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";

import { CircularProgress } from "@mui/material";

import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { AuthContext } from "@/contexts/AuthContext";
import { USER_FAVORITE_MOVIES } from "@/utils/api/api-client-queries";

import { useRouter } from "next/router";

interface FavoriteMovies {
  loggedUser: {
    favorites: {
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

const FavoritesPage: React.FC = () => {
  const router = useRouter();

  const { token, userInfo } = useContext(AuthContext);
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: FavoriteMovies } = useQuery(
    USER_FAVORITE_MOVIES,
    {
      context: {
        headers: {
          authorization: token,
        },
      },
      variables: { email: userInfo.email },
      onCompleted: (data) => {
        console.log(data);
      },
    }
  );

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace("/");
    }
  }, [router, token, userInfo.email]);

  if (loading) {
    return <CircularProgress />;
  }

  return <MoviesGrid items={data?.loggedUser.favorites!} />;
};

export default FavoritesPage;
