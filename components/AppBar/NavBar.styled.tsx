import { styled, Box, AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";

export const StyledNavBarWrapper = styled(Box)(() => ({
  flexGrow: 1,
}));

export const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "black",
  position: "static",
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const StyledButton = styled(Button)(() => ({
  borderRadius: "20px",
  color: "inherit",

  "&:hover": {
    backgroundColor: "#444242",
  },
}));

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: 'inherit'
});
