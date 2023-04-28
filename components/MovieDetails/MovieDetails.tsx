import { useEffect, useState } from "react";

import { CircularProgress, Typography, Box } from "@mui/material";
import {
  StyledWrapper,
  StyledImg,
  StyledBox,
  StyledInfo,
} from "./MovieDetails.styled";

import { MoviesListElementProps } from "@/components/MoviesList/MoviesListElement/MoviesListElement.types";
import { DUMMY_MOVIES } from "@/store/dummy-data";

const MovieDetails: React.FC<{ id: string | number }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesListElementProps>();

  useEffect(() => {
    const movie = DUMMY_MOVIES.find((movie) => movie.id === id);
    setSelectedMovie(movie!);
  }, [id]);

  if (!selectedMovie) {
    return <CircularProgress />;
  }

  return (
    <StyledBox>
      <StyledWrapper className="movie-info">
        <StyledImg src={selectedMovie.imgUrl}></StyledImg>
        <Box>
          <Typography component="div" variant="h5" color="initial">
            {selectedMovie.title}
          </Typography>
          <StyledInfo >
            <Typography component="span" variant="subtitle2">
              {selectedMovie.productionYear} {"|"}
            </Typography>
            {selectedMovie.categories.map((category) => (
              <Typography component="p" variant="caption" key={category}>
                {category.toUpperCase()}
              </Typography>
            ))}
          </StyledInfo>
          <Typography className="description" component="div" variant="caption">
            {selectedMovie.description}
          </Typography>
        </Box>
      </StyledWrapper>
      <StyledWrapper className="actors-list">List of actors</StyledWrapper>
    </StyledBox>
  );
};

export default MovieDetails;
