import React from "react";

import MoviesList from "@/components/MoviesList/MoviesList";
import UserInfo from "./UserInfo/UserInfo";

import { StyledUserDetailsWrapper } from "./UserDetails.styled";

const UserDetails: React.FC = () => {
  return (
    <StyledUserDetailsWrapper>
      <UserInfo />
      <MoviesList listTitle="User favorite movies" />
    </StyledUserDetailsWrapper>
  );
};

export default UserDetails;
