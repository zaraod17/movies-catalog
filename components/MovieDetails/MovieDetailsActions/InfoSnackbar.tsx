import * as React from "react";
import { Snackbar, Alert } from "@mui/material";

const InfoSnackbar: React.FC<{ errorMessage?: string, clearState: () => void }> = ({
  errorMessage,
  clearState
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (errorMessage) {
      setOpen(true);
    }
  }, [errorMessage]);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    clearState();
  };

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};

export default InfoSnackbar;
