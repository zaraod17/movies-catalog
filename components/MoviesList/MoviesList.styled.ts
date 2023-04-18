import { styled, Box } from "@mui/material";

export const StyledListWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  maxWidth: "500px",
  border: "none",
  marginInline: "1rem",
  borderRadius: '1rem',
  boxShadow: '2px 2px 11px #888888',

  "& .MuiTypography-h6": {
    fontWeight: 600,
    textAlign: "center",
  },
}));
