import { List, Typography } from "@mui/material";

import { StyledListWrapper } from "./MoviesList.styled";
import MoviesListElement from "./MoviesListElement/MoviesListElement";

import { DUMMY_MOVIES } from "@/store/dummy-data";

const MoviesList: React.FC<{ listTitle: string }> = ({ listTitle }) => {
  return (
    <StyledListWrapper>
      <Typography variant="h6" component="div">
        {listTitle}
      </Typography>
      <List>
        {DUMMY_MOVIES.map((movie) => (
          <MoviesListElement key={movie.id} {...movie} />
        ))}
      </List>
    </StyledListWrapper>
  );
};

export default MoviesList;
