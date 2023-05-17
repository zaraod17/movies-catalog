import { styled, Grid, Box } from "@mui/material";

export const StyledMoviesGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.up("md")]: {
    "&:nth-child(3n+3)": {
      "& .MuiPaper-root": {
        transformOrigin: "right",
      },
    },

    "&:nth-child(3n+1)": {
      "& .MuiPaper-root": {
        transformOrigin: "left",
      },
    },
  },

  "& .MuiPaper-root": {
    width: "80%",
    height: "300px",
    borderRadius: "1rem",
    position: "relative",
    transition: "all .2s ease-in-out",

    img: {
      width: "100%",
      height: "100%",
      borderRadius: "1rem",
      position: "relative",
    },

    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
      zIndex: "2",

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
