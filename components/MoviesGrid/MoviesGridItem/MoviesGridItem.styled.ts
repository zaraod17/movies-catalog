import { styled, Grid } from "@mui/material";

export const StyledMoviesGridItem = styled(Grid)(() => ({
  "& .MuiPaper-root": {
    width: "200px",
    height: "200px",

    img: {
      width: "inherit",
      height: "inherit",
    },
  },
}));
