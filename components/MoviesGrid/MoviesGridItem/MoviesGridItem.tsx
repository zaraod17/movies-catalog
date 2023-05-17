import { Paper, IconButton, Tooltip } from "@mui/material";
import { PlayArrow, Add, Info } from "@mui/icons-material";

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
        <StyledGridItemActions>
          <Tooltip title="Play">
            <IconButton>
              <PlayArrow />
            </IconButton>
          </Tooltip>
          <Tooltip title="Add">
            <IconButton>
              <Add />
            </IconButton>
          </Tooltip>
          <Tooltip title="Info">
            <IconButton>
              <Info />
            </IconButton>
          </Tooltip>
        </StyledGridItemActions>
      </Paper>
    </StyledMoviesGridItem>
  );
};

export default MoviesGridItem;
