import { Paper } from "@mui/material";

import {
  StyledMoviesGridItem,
  StyledGridItemActions,
} from "./MoviesGridItem.styled";
import { MoviesGridItemsProps } from "./MoviesGridItem.types";

const MoviesGridItem: React.FC<MoviesGridItemsProps> = ({ img, title }) => {
  return (
    <StyledMoviesGridItem item xs={12} md={4}>
      <Paper elevation={1}>
        <img src={img} alt={title} />
        <StyledGridItemActions>Dupa</StyledGridItemActions>
      </Paper>
    </StyledMoviesGridItem>
  );
};

export default MoviesGridItem;
