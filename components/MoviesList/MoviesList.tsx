import { List, Typography, CircularProgress } from "@mui/material";
import { useQuery } from "@apollo/client";

import { StyledListWrapper, StyledLink } from "./MoviesList.styled";
import MoviesListElement from "./MoviesListElement/MoviesListElement";

import { DUMMY_MOVIES } from "@/data/dummy-data";
import { ListTitleType } from "@/components/MainPageLists/MainPageList.types";
import {
  GET_POPURLAR_MOVIES,
  GET_LATEST_RELEASES,
  GET_UPCOMING_MOVIES,
} from "@/utils/ApiClientQueries";

const MoviesList: React.FC<{ listTitle: ListTitleType }> = ({ listTitle }) => {
  const query =
    listTitle === "Popular Movies"
      ? GET_POPURLAR_MOVIES
      : listTitle === "Latest Releases"
      ? GET_LATEST_RELEASES
      : GET_UPCOMING_MOVIES;

  const { loading, error, data } = useQuery(query);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <StyledListWrapper>
      <Typography variant="h6" component="div">
        {listTitle}
      </Typography>
      <List>
        {DUMMY_MOVIES.map((movie) => (
          <StyledLink key={movie.id} href={`/movie-details/${movie.id}`}>
            <MoviesListElement {...movie} />
          </StyledLink>
        ))}
        <button onClick={() => console.log(data)}>Dupa</button>
      </List>
    </StyledListWrapper>
  );
};

export default MoviesList;
