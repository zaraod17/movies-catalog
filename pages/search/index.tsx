import { useContext } from "react";
import { useQuery } from "@apollo/client";

import { Typography, CircularProgress } from "@mui/material";

import { GET_SEARCHED_MOVIES } from "@/utils/api/api-client-queries";

import { MoviesListType } from "@/components/MoviesList/MoviesList.types";
import { SearchContext } from "@/contexts/SearchContext";

import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

interface SearchedMoviesType {
  searchedMovie: MoviesListType;
}

const SearchPage: React.FC = () => {
  const { movieTitle } = useContext(SearchContext);
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: SearchedMoviesType } = useQuery(
    GET_SEARCHED_MOVIES,
    {
      variables: { title: movieTitle },
      onCompleted: (data) => {
        console.log(data);
      },
    }
  );

  if (loading) {
    return <CircularProgress></CircularProgress>
  }

  if (error) {
    return <Typography variant="caption">{error.message}</Typography>;
  }

  return <MoviesGrid items={data?.searchedMovie!} />;
};

export default SearchPage;
