import { styled, ListItem, Box, Typography } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  marginBlock: "1rem",
  backgroundColor: theme.palette.grey[400],

  "& .MuiButtonBase-root": {
    padding: 0,
  },

  "& .MuiListItemText-root": {
    paddingInline: "2rem",
    marginInline: 0,

    "p, span": {
      color: "black",
    },
  },

  "& .MuiListItemText-primary": {
    fontWeight: 700,
  },

  "& .movie-description": {
    display: "none",
  },

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    // transition: 'height 0.3s ease', // TODO: It should animate height
    // minHeight: '200px',

    "& .MuiTypography-root, p": {
      color: "white",
    },

    "& .movie-description": {
      display: "inline",
    },
  },
}));

export const StyledImg = styled("img")(({ theme }) => ({
  width: "100px",
  height: "100px",
}));

export const MovieInfo = styled(Box)(({ theme }) => ({
  display: "flex",

  p: {
    marginInline: "5px",
    marginBlock: 0,
  },
}));
