import { Typography } from "@mui/material";
import {
  StyledNavBarWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledButton,
  StyledLink
} from "./NavBar.styled";

const NavBar: React.FC = () => {
  return (
    <>
      <StyledNavBarWrapper>
        <StyledAppBar>
          <StyledToolbar>
            <Typography variant="h6" component="div">
              <StyledLink href="/">MoviesCatalog</StyledLink>
            </Typography>
            <StyledButton>Login</StyledButton>
          </StyledToolbar>
        </StyledAppBar>
      </StyledNavBarWrapper>
    </>
  );
};

export default NavBar;
