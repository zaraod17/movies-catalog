import { useState } from "react";
import { ApolloError, useQuery } from "@apollo/client";

import {
  CircularProgress,
  Typography,
  Box,
  ListSubheader,
  ListItem,
} from "@mui/material";
import {
  StyledWrapper,
  StyledImg,
  StyledBox,
  StyledInfo,
  ActorsList,
  MovieTrailerWrapper,
  StyledFrame,
} from "./MovieDetails.styled";

import { MoviesListElementProps } from "@/components/MoviesList/MoviesListElement/MoviesListElement.types";
import { GET_SINGLE_MOVIE } from "@/utils/api-client-queries";
import { MovieType } from "./MovieDetails.types";

const MovieDetails: React.FC<{ id: string | number }> = ({ id }) => {
  const [selectedMovie, setSelectedMovie] = useState<MoviesListElementProps>();

  const {
    loading,
    error,
    data,
  }: {
    loading: boolean;
    error?: ApolloError | undefined;
    data?: { singleMovie: MovieType };
  } = useQuery(GET_SINGLE_MOVIE, { variables: { id: id } });

  if (loading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <StyledBox>
        <StyledWrapper className="movie-info">
          <StyledImg src={data?.singleMovie.imgUrl}></StyledImg>
          <Box>
            <Typography component="div" variant="h5" color="initial">
              {data?.singleMovie.title}
            </Typography>
            <StyledInfo>
              <Typography component="span" variant="subtitle2">
                {data?.singleMovie.productionYear} {"|"}
              </Typography>
              {data?.singleMovie.categories.map((category) => (
                <Typography component="p" variant="caption" key={category}>
                  {category.toUpperCase()}
                </Typography>
              ))}
            </StyledInfo>
            <Typography
              className="description"
              component="div"
              variant="caption"
            >
              {data?.singleMovie.description}
            </Typography>
          </Box>
        </StyledWrapper>
        <StyledWrapper className="actors-list">
          <ActorsList
            subheader={
              <ListSubheader component="div" id="nestet-list-subheader">
                Movie actors
              </ListSubheader>
            }
          >
            {data?.singleMovie.actors.map((actor) => (
              <ListItem key={actor}>* {actor}</ListItem>
            ))}
          </ActorsList>
        </StyledWrapper>
      </StyledBox>
      <MovieTrailerWrapper>
        <StyledFrame src={data?.singleMovie.trailerUrl}></StyledFrame>
      </MovieTrailerWrapper>
    </>
  );
};

export default MovieDetails;
