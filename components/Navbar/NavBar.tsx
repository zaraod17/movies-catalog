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

const NavBar: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleLogin = (): void => {
    setIsLogin(true);
  };

  const handleLogout = (): void => {
    setIsLogin(false);
  };

  return (
    <>
      <StyledAppBar>
        <StyledToolbar>
          <MenuDropdown/>
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
          {isLogin ? (
            <UserDropdown onLogout={handleLogout} />
          ) : (
            <StyledButton onClick={handleLogin}>Login</StyledButton>
          )}
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default NavBar;
