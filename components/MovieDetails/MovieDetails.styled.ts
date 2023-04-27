import { styled, Box } from "@mui/material";

export const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  paddingBlock: "5rem",
  paddingInline: "3rem",
}));

export const StyledWrapper = styled(Box)(() => ({
  backgroundColor: "white",
  borderRadius: "2rem",
  maxWidth: "800px",
  boxShadow: "2px 2px 11px #888888",
  display: "flex",

  ".MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingInline: "10px",

    ".MuiTypography-caption": {
      marginTop: "1rem",
    },
  },
}));

export const StyledImg = styled("img")(() => ({
  height: "100%",
  objectFit: "contain",
  borderRadius: "inherit",
}));
