import { styled, Box } from "@mui/material";

export const StyledFormBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  button: {
    marginTop: "1rem",
    borderRadius: "1rem",
    textTransform: "capitalize",
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
