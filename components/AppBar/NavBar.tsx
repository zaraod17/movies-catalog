import { Typography, Button } from "@mui/material";

import {
  StyledNavBarWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledButton
} from "./NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <>
      <StyledNavBarWrapper>
        <StyledAppBar>
          <StyledToolbar>
            <Typography variant="h6" component="div">
              MoviesCatalog
            </Typography>
            <StyledButton>Login</StyledButton>
          </StyledToolbar>
        </StyledAppBar>
      </StyledNavBarWrapper>
    </>
  );
};

export default NavBar;
