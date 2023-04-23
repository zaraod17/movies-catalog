import { styled, ListItem, Box } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  marginBlock: "1rem",
  backgroundColor: theme.palette.grey[400],
  maxHeight: "100px",
  transition: "all 0.3s ease",

  "& .MuiButtonBase-root": {
    padding: 0,
    height: "inherit",
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
    maxHeight: 0,
    overflow: "hidden",
    transition: "all 0.3s ease",
  },

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    maxHeight: "200px",
    "& .MuiTypography-root, p": {
      color: "white",
    },
    "& .movie-description": {
      maxHeight: "1000px",
    },
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
}));

export const StyledImg = styled("img")(() => ({
  width: "100px",
  height: "100px",
}));

export const MovieInfo = styled(Box)(() => ({
  display: "flex",
  p: {
    marginInline: "5px",
    marginBlock: 0,
  },
}));
