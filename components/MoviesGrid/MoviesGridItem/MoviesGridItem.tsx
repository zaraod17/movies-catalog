import { Paper } from "@mui/material";

import { StyledMoviesGridItem } from "./MoviesGridItem.styled";
import { MoviesGridItemsProps } from "./MoviesGridItem.types";

const MoviesGridItem: React.FC<MoviesGridItemsProps> = ({ img, title }) => {
  return (
    <StyledMoviesGridItem item xs={4}>
      <Paper elevation={1}>
        <img src={img} alt={title} />
      </Paper>
    </StyledMoviesGridItem>
  );
};

export default MoviesGridItem;
