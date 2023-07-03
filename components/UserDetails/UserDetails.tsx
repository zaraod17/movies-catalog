import React from "react";
import { ApolloError } from "apollo-server-core";

import MoviesList from "@/components/MoviesList/MoviesList";
import UserInfo from "./UserInfo/UserInfo";

import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { CircularProgress, Typography } from "@mui/material";

import { USER_INFO } from "@/utils/api/api-client-queries";
import { AuthContext } from "@/contexts/AuthContext";

import { StyledUserDetailsWrapper } from "./UserDetails.styled";
import { LoggedUserInfo } from "./UserDetails.types";

const UserDetails: React.FC = () => {
  const { token, userInfo } = useContext(AuthContext);

  const {
    loading,
    error,
    data,
  }: {
    loading: boolean;
    error?: any;
    data?: LoggedUserInfo;
  } = useQuery(USER_INFO, {
    context: {
      headers: {
        authorization: token,
      },
    },
    variables: { email: userInfo.email },
    onCompleted: (data) => {
      console.log(data);
    },
  });

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="caption">{error.message}</Typography>;
  }
  return (
    <StyledUserDetailsWrapper>
      <UserInfo
        email={data?.loggedUser.email}
        username={data?.loggedUser.username}
      />
      <MoviesList
        moviesList={data?.loggedUser.favorites}
        listTitle="User favorite movies"
      />
      <MoviesList
        moviesList={data?.loggedUser.favorites}
        listTitle="User list movies"
      />
    </StyledUserDetailsWrapper>
  );
};

export default UserDetails;
