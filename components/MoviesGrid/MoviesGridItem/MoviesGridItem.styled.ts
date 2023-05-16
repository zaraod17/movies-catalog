import { styled, Grid, Box } from "@mui/material";

export const StyledMoviesGridItem = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",

  "& .MuiPaper-root": {
    width: "80%",
    height: "300px",
    borderRadius: "1rem",
    position: "relative",

    img: {
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
      position: "relative",
    },

    "&:hover": {
      cursor: "pointer",

      "& .MuiBox-root": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
}));

export const StyledGridItemActions = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  backgroundColor: "rgba(90, 82, 86, 0.5)",
  width: "100%",
  height: "20%",
  borderBottomLeftRadius: "1rem",
  borderBottomRightRadius: "1rem",
  color: "white",
  display: "none",
}));
