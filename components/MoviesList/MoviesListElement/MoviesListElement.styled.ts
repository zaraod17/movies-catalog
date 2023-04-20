import { styled, ListItem } from "@mui/material";

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: 0,
  marginBlock: "1rem",
  backgroundColor: theme.palette.grey[400],

  "& .MuiButtonBase-root": {
    padding: 0,
  },

  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  }


}));

export const StyledImg = styled("img")(({ theme }) => ({
  width: "100px",
  height: "100px",
}));
