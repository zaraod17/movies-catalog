import { styled, Box, Dialog, DialogContent } from "@mui/material";

export const StyledDialog = styled(Dialog)(() => ({
  "& .MuiPaper-root": {
    minWidth: "300px",
    minHeight: '350px'
  },
}));

export const StyledDialogContent = styled(DialogContent)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  span: {
    marginTop: "1rem",

    "&:hover": {
      color: "black",
      cursor: "pointer",
      textDecoration: "underline",
    },
  },
}));

export const StyledFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  button: {
    marginTop: "1rem",
    borderRadius: "1rem",
    textTransform: "capitalize",
    backgroundColor: theme.palette.grey[700],

    "&:hover": {
      backgroundColor: "black",
    },
  },
}));

export const StyledInputWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-end",

  input: {
    fontSize: "14px",
  },

  svg: {
    color: "currentColor",
    marginRight: theme.spacing(1),
    marginBlock: 0.5,
  },
}));
