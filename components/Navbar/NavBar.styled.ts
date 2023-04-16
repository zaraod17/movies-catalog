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
  fontWeight: 700,
  textTransform: "capitalize",

  "&:hover": {
    backgroundColor: "#444242",
  },
}));

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  padding: "10px",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: "#444242",
  },
});

export const StyledLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "& .links": {
    marginLeft: "10px",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const InputWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
}));

export const StyledMenu = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
