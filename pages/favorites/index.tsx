import { useQuery } from "@apollo/client";
import { useContext } from "react";

import { CircularProgress } from "@mui/material";

import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { AuthContext } from "@/contexts/AuthContext";
import { USER_FAVORITE_MOVIES } from "@/utils/api/api-client-queries";

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

  if (loading) {
    return <CircularProgress />;
  }

  return <MoviesGrid items={data?.loggedUser.favorites!} />;
};

export default FavoritesPage;
