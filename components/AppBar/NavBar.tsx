import { useState } from "react";

import { Typography, Box } from "@mui/material";
import {
  StyledNavBarWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  StyledLink,
  StyledLinks,
} from "./NavBar.styled";

import UserDropdown from "./UserDropdown";

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
      <StyledNavBarWrapper>
        <StyledAppBar>
          <StyledToolbar>
            <StyledLinks>
              <Typography variant="h6" component="div">
                <StyledLink href="/">MoviesCatalog</StyledLink>
              </Typography>
              <Box className="links">
                <StyledLink href="/">MyList</StyledLink>
                <StyledLink href="/">Favorites</StyledLink>
              </Box>
            </StyledLinks>
            {isLogin ? (
              <UserDropdown onLogout={handleLogout} />
            ) : (
              <StyledButton onClick={handleLogin}>Login</StyledButton>
            )}
          </StyledToolbar>
        </StyledAppBar>
      </StyledNavBarWrapper>
    </>
  );
};

export default NavBar;
