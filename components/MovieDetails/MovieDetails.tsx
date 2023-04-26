import { useEffect, useState } from "react";

import { Box, CircularProgress } from "@mui/material";

import { MoviesListElementProps } from "@/components/MoviesList/MoviesListElement/MoviesListElement.types";
import { DUMMY_MOVIES } from "@/store/dummy-data";

const MovieDetails: React.FC<{ id: string | number }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesListElementProps>();

  useEffect(() => {
    const movie = DUMMY_MOVIES.find((movie) => movie.id === id);
    setSelectedMovie(movie!);
  }, [id]);

  console.log(typeof id);

  return (
    <>
      {!selectedMovie && <CircularProgress />}
      {selectedMovie && <Box>{selectedMovie!.title}</Box>}
    </>
  );
};

export default MovieDetails;
