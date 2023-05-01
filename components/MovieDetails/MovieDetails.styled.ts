import { styled, Box, Typography, List } from "@mui/material";

const wrapperStyles = {
  backgroundColor: "white",
  borderRadius: ".5rem",
  boxShadow: "2px 2px 11px #888888",
};

export const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  paddingBlock: "5rem",

  ".actors-list": {
    marginLeft: "2rem",

    [theme.breakpoints.down("md")]: {
      marginTop: "1rem",
      marginLeft: 0,
    },

    ul: {
      listStyleType: "",
    },
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const StyledWrapper = styled(Box)(({ theme }) => ({
  ...wrapperStyles,
  maxWidth: "800px",
  display: "flex",

  ".MuiBox-root": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    paddingInline: "10px",
    paddingBlock: "1rem",

    ".description": {
      marginTop: "1rem",
    },
  },

  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
  },
}));

export const StyledImg = styled("img")(({theme}) => ({
  height: "100%",
  maxWidth: "400px",
  borderRadius: "inherit",
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,

  [theme.breakpoints.down('md')]: {
    borderTopRightRadius: 'inherit',
    borderBottomRightRadius: 'inherit',
  }
}));

export const StyledInfo = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",

  "p, span": {
    marginInline: "5px",
    fontWeight: "bold",
    padding: "3px",

    "&:hover": {
      color: "white",
      backgroundColor: "gray",
      borderRadius: "1rem",
    },
  },
}));

export const ActorsList = styled(List)(({ theme }) => ({
  div: {
    borderRadius: "0.5rem",
  },

  li: {
    "&:hover": {
      backgroundColor: theme.palette.grey[600],
      color: "white",
    },
  },
}));

export const MovieTrailerWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const StyledFrame = styled("iframe")(({ theme }) => ({
  minWidth: "70%",
  minHeight: "400px",
  border: "none",
  borderRadius: "1rem",

  [theme.breakpoints.down("md")]: {
    minWidth: "90%",
    minHeight: "300px",
  },
}));
