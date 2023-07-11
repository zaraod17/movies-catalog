import { useContext } from "react";
import { ApolloError, useQuery, useMutation } from "@apollo/client";

import { Add, Favorite } from "@mui/icons-material";

import {
  CircularProgress,
  Typography,
  Box,
  ListSubheader,
  ListItem,
  Tooltip,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import InfoSnackbar from "./MovieDetailsActions/InfoSnackbar";

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
    {
      loading: addFavMovieLoading,
      error: addFavMovieError,
      data: favMovieData,
      reset,
    },
  ] = useMutation(ADD_TO_FAVORITES, {
    variables: { id: userInfo.id, email: userInfo.email },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const [
    addToUserList,
    {
      loading: addToUserListLoading,
      error: addToUserListError,
      data: addToUserListData,
      reset: addToUserListReset,
    },
  ] = useMutation(ADD_TO_USER_LIST, {
    variables: { id: userInfo.id, email: userInfo.email },
    onError: (error) => {
      console.log(error.message);
    },
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
                  <IconButton onClick={() => addFavoriteMovie()}>
                    <Add />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Add to favorites">
                  <IconButton onClick={() => addToUserList()}>
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
      <InfoSnackbar
        errorMessage={
          addFavMovieError
            ? addFavMovieError?.message
            : addToUserListError?.message
        }
        clearState={addFavMovieError ? reset : addToUserListReset}
      />
    </>
  );
};

export default MovieDetails;
