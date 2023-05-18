import Link from "next/link";

import { Grid } from "@mui/material";

import { MoviesGridProps } from "./MoviesGrid.types";

import MoviesGridItem from "./MoviesGridItem/MoviesGridItem";

const MoviesGrid: React.FC<MoviesGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2} sx={{ padding: "1rem" }}>
      {items.map((movie) => (
        <MoviesGridItem key={movie.id} {...movie} />
      ))}
    </Grid>
  );
};

export default MoviesGrid;
