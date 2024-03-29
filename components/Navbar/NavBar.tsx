import { useContext } from "react";

import { useRouter } from "next/router";

import { Typography, Box, Button } from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  StyledLink,
  StyledLinks,
  InputWrapper,
  StyledSearchButton,
} from "./NavBar.styled";

import { AuthContext } from "@/contexts/AuthContext";
import { SearchContext } from "@/contexts/SearchContext";

import UserDropdown from "./UserDropdown/UserDropdown";
import SearchField from "../SearchField/SearchField";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import AuthModal from "@/components/AuthModal/AuthModal";
import { SearchContextProvider } from "@/contexts/SearchContext";

const NavBar: React.FC = () => {
  const router = useRouter();
  const { openModal, handleModal, userInfo } = useContext(AuthContext);
  const { movieTitle } = useContext(SearchContext);

  const handleOpenModal = () => {
    handleModal(true);
  };

  const handleClose = () => {
    handleModal(false);
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <MenuDropdown />
        <StyledLinks>
          <Typography variant="h6" component="div">
            <StyledLink href="/">MoviesCatalog</StyledLink>
          </Typography>
          {userInfo.email && (
            <Box className="links">
              <StyledLink href="/watchlist">MyList</StyledLink>
              <StyledLink href="/favorites">Favorites</StyledLink>
            </Box>
          )}
        </StyledLinks>
        <InputWrapper>
          <SearchField />
          <StyledSearchButton
            onClick={() => {
              router.push("/search");
              console.log(movieTitle);
            }}
          >
            Search
          </StyledSearchButton>
        </InputWrapper>
        <AuthModal modalOpen={openModal} onModalClose={handleClose} />
        {userInfo.email ? (
          <UserDropdown />
        ) : (
          <StyledButton onClick={handleOpenModal} data-cy="login">
            Login
          </StyledButton>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;
