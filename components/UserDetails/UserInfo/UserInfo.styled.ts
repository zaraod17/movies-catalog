import { styled, Box } from "@mui/material";

export const StyledUserInfo = styled(Box)(() => ({
  backgroundColor: "white",
  border: "none",
  maxHeight: "500px",
  maxWidth: "500px",
  marginTop: "2rem",
  borderRadius: "1rem",
  boxShadow: "2px 2px 11px #888888",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .MuiAvatar-root": {
    width: "100px",
    height: "100px",
    marginTop: "1rem",
    marginBottom: "1rem",
  },

  ".MuiTypography-subtitle2": {
    marginTop: "2rem",
  },
}));
