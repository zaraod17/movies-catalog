import { Box, List, Typography } from "@mui/material";

import {StyledListWrapper} from './MoviesList.styled';

const MoviesList: React.FC = () => {
  return (
    <StyledListWrapper>
      <Typography variant="h6" component="div">Popular movies</Typography>
      <List></List>
    </StyledListWrapper>
  );
};

export default MoviesList;
