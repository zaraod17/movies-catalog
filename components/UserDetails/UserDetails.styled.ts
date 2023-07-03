import { styled, Box } from "@mui/material";

export const StyledUserDetailsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center'
  },
}));
