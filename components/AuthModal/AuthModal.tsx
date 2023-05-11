import { useState } from "react";
import { DialogTitle, DialogContentText, Typography } from "@mui/material";

import { AuthMode, AuthModalProps } from "./AuthModal.types";

import { StyledDialogContent, StyledDialog } from "./AuthModal.styled";

import AuthModalForm from "./AuthModalForm/AuthModalForm";

const dialogContents = {
  login: "Login to your account",
  signup: "Create new account",
};

const AuthModal: React.FC<AuthModalProps> = ({ onModalClose, modalOpen }) => {
  const [mode, setMode] = useState<AuthMode>("login");

  const isLogin = mode === "login";

  return (
    <>
      <StyledDialog onClose={onModalClose} open={modalOpen}>
        <DialogTitle sx={{ textAlign: "center" }}>
          {isLogin ? "Sign in" : "Sign up"}
        </DialogTitle>
        <StyledDialogContent>
          <DialogContentText>
            {isLogin ? dialogContents.login : dialogContents.signup}
          </DialogContentText>
          <AuthModalForm mode={mode} />
          {mode === "login" && (
            <Typography
              onClick={() => setMode("signup")}
              component="span"
              variant="caption"
            >
              Create an account
            </Typography>
          )}
          {mode === "signup" && (
            <Typography
              onClick={() => setMode("login")}
              component="span"
              variant="caption"
            >
              Log in to your account
            </Typography>
          )}
        </StyledDialogContent>
      </StyledDialog>
    </>
  );
};

export default AuthModal;
