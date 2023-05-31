import { List, Typography } from "@mui/material";
import { useQuery } from "@apollo/client";

import { StyledListWrapper, StyledLink } from "./MoviesList.styled";
import MoviesListElement from "./MoviesListElement/MoviesListElement";

import { DUMMY_MOVIES } from "@/data/dummy-data";

const MoviesList: React.FC<{ listTitle: string }> = ({ listTitle }) => {
  // const {loading, error, data} = useQuery();

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
      </List>
    </StyledListWrapper>
  );
};

export default MoviesList;
