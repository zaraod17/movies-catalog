import { styled, Box } from "@mui/material";

import Link from "next/link";

export const StyledListWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  maxWidth: "500px",
  border: "none",
  marginInline: "1rem",
  marginTop: "2rem",
  borderRadius: "1rem",
  boxShadow: "2px 2px 11px #888888",

  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },

  "& .MuiTypography-h6": {
    fontWeight: 600,
    textAlign: "center",
  },
}));

export const StyledLink = styled(Link)(() => ({
  textDecoration: "none",
}));
