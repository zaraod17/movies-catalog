import { useState } from "react";

import { Typography, Box } from "@mui/material";
import {
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  StyledLink,
  StyledLinks,
  InputWrapper,
} from "./NavBar.styled";

import UserDropdown from "./UserDropdown/UserDropdown";
import SearchField from "../SearchField/SearchField";
import MenuDropdown from "./MenuDropdown/MenuDropdown";
import AuthModal from "@/components/AuthModal/AuthModal";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogin = (): void => {
    setIsLogin(true);
    setOpen(false);
  };

  const handleLogout = (): void => {
    setIsLogin(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Box className="links">
              <StyledLink href="/watchlist">MyList</StyledLink>
              <StyledLink href="/favorites">Favorites</StyledLink>
            </Box>
          </StyledLinks>
          <InputWrapper>
            <SearchField />
          </InputWrapper>
          <AuthModal
            modalOpen={open}
            onModalClose={handleClose}
            onLogin={handleLogin} // TODO: create context for this to avoid props chain (create login context)
          />
          {isLogin ? (
            <UserDropdown onLogout={handleLogout} />
          ) : (
            <StyledButton onClick={handleOpenModal}>Login</StyledButton>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
