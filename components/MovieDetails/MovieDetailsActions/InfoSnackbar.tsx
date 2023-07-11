import * as React from "react";
import { Snackbar, Alert } from "@mui/material";

const InfoSnackbar: React.FC<{ errorMessage?: string }> = ({
  errorMessage,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default InfoSnackbar;
