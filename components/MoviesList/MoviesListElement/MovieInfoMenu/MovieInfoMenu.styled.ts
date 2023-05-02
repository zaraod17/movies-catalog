import { IconButton, styled, Popper } from "@mui/material";

export const InfoButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "black",
  paddingLeft: 0,

  [theme.breakpoints.only("xs")]: {
    display: "inline",
  },
}));

export const StyledPopper = styled(Popper)(() => ({
  backgroundColor: "white",
  minWidth: "200px",
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",

  p: {
    marginInline: "5px",
    marginBlock: 0,
  },
}));
