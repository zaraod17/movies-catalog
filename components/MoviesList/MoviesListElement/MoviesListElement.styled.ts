import { styled, ListItem, Box } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  marginBlock: "1rem",

  "& .MuiListItemButton-root": {
    padding: 0,
    backgroundColor: theme.palette.grey[400],
    minHeight: "90px",
    transition: "all 0.3s ease",
    position: "relative",

    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
      maxHeight: "200px",
      "& .MuiTypography-root, p": {
        color: "white",
      },
      "& .movie-description": {
        maxHeight: "100px",
      },
    },

    "& .MuiListItemText-root": {
      paddingInline: "2rem",
      marginRight: 0,
      marginLeft: '100px',

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
  },
}));

export const ImageWrapper = styled(Box)(() => ({
  position: "absolute",
  height: "100%",
}));

export const StyledImg = styled("img")(() => ({
  width: "100px",
  height: "90px",
}));

export const MovieInfo = styled(Box)(() => ({
  display: "flex",
  p: {
    marginInline: "5px",
    marginBlock: 0,
  },
}));
