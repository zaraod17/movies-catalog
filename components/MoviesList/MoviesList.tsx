import { List, Typography, CircularProgress } from "@mui/material";
import { useQuery } from "@apollo/client";

import { StyledListWrapper, StyledLink } from "./MoviesList.styled";
import MoviesListElement from "./MoviesListElement/MoviesListElement";

import { ListTitleType } from "@/components/MainPageLists/MainPageList.types";
import { GET_MOVIES_LIST } from "@/utils/api/api-client-queries";
import { MovieDataType, MoviesListType } from "./MoviesList.types";

const MoviesList: React.FC<{
  listTitle: ListTitleType;
  moviesList: MoviesListType | undefined;
}> = ({ listTitle, moviesList }) => {
  const {
    loading,
    error,
    data,
  }: { loading: boolean; error?: any; data?: MovieDataType } = useQuery(
    GET_MOVIES_LIST,
    {
      variables: { category: listTitle },
    }
  );

  const listOfMovies = moviesList ? moviesList : data?.moviesList;

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <StyledListWrapper>
      <Typography variant="h6" component="div">
        {listTitle}
      </Typography>
      <List>
        {listOfMovies?.map((movie) => (
          <StyledLink key={movie.id} href={`/movie-details/${movie.id}`}>
            <MoviesListElement {...movie} />
          </StyledLink>
        ))}
      </List>
    </StyledListWrapper>
  );
};

export default MoviesList;
