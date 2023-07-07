import { useContext } from "react";
import { ApolloError, useQuery, useMutation } from "@apollo/client";

import { IconButton, Tooltip } from "@mui/material";
import { Add, Favorite, FavoriteBorder } from "@mui/icons-material";

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
  ActionsWrapper,
} from "./MovieDetails.styled";

import { GET_SINGLE_MOVIE } from "@/utils/api/api-client-queries";
import { MovieType } from "./MovieDetails.types";
import { AuthContext } from "@/contexts/AuthContext";

import {
  ADD_TO_FAVORITES,
  ADD_TO_USER_LIST,
} from "@/utils/api/api-client-queries";

const MovieDetails: React.FC<{ id: string | number }> = ({ id }) => {
  const { token, userInfo } = useContext(AuthContext);

  const [
    addFavoriteMovie,
    { loading: addFavMovieLoading, data: favMovieData },
  ] = useMutation(ADD_TO_FAVORITES, {
    variables: { id: userInfo.id, email: userInfo.email },
  });

  const [
    addToUserList,
    { loading: addToUserListLoading, data: addToUserListData },
  ] = useMutation(ADD_TO_USER_LIST, {
    variables: { id: userInfo.id, email: userInfo.email },
  });

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

            {token && (
              <ActionsWrapper>
                <Tooltip title="Add to myList">
                  <IconButton>
                    <Add />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add to favorites">
                  <IconButton>
                    <Favorite />
                  </IconButton>
                </Tooltip>
              </ActionsWrapper>
            )}
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
