import { Grid } from "@mui/material";

import { MoviesGridProps } from "./MoviesGrid.types";

import MoviesGridItem from "./MoviesGridItem/MoviesGridItem";

const MoviesGrid: React.FC<MoviesGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2}>
      {items.map((movie) => (
        <MoviesGridItem key={movie.title} title={movie.title} img={movie.img} />
      ))}
    </Grid>
  );
};

export default MoviesGrid;
