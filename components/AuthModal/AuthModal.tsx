import { useState, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import { AuthMode } from "./AuthModal.types";

import AuthModalForm from "./AuthModalForm/AuthModalForm";

const dialogContents = {
  login: "Login to your account",
  signup: "Create an account",
};

const AuthModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [mode, setMode] = useState<AuthMode>("login");

  const isLogin = mode === "login";

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>{isLogin ? "Login" : "Signup"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isLogin ? dialogContents.login : dialogContents.signup}
          </DialogContentText>
          <AuthModalForm />
        </DialogContent>
      </Dialog>
      <Button onClick={handleOpenModal} variant="outlined">
        Login
      </Button>
    </>
  );
};

export default AuthModal;
