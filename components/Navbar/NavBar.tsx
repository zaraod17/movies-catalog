import { useContext } from "react";

import { Typography, Box } from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  StyledLink,
  StyledLinks,
  InputWrapper,
} from "./NavBar.styled";

import { AuthContext } from "@/contexts/AuthContext";

import UserDropdown from "./UserDropdown/UserDropdown";
import SearchField from "../SearchField/SearchField";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import AuthModal from "@/components/AuthModal/AuthModal";

const NavBar: React.FC = () => {
  const { login, openModal, handleModal, userInfo } = useContext(AuthContext);

  const handleOpenModal = () => {
    handleModal(true);
  };

  const handleClose = () => {
    handleModal(false);
  };

  return (
    <>
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
          </InputWrapper>
          <AuthModal modalOpen={openModal} onModalClose={handleClose} />
          {login ? (
            <UserDropdown />
          ) : (
            <StyledButton
              onClick={handleOpenModal}
              data-cy="login"
            >
              Login
            </StyledButton>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
