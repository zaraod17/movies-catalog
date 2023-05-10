import { useRef } from "react";

import { TextField, Button } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

import { StyledFormBox, StyledInputWrapper } from "../AuthModal.styled";

const AuthModalForm: React.FC<{ mode: string; onLogin: () => void }> = ({
  mode,
  onLogin,
}) => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const isLogin = mode === "login";

  const handleAuthForm = () => {
    if (isLogin) {
      onLogin();
    }
  };

  return (
    <StyledFormBox component="form">
      <StyledInputWrapper>
        <PersonIcon />
        <TextField ref={login} variant="standard" label="Login" type="text" />
      </StyledInputWrapper>
      <StyledInputWrapper>
        <PasswordIcon />
        <TextField
          ref={password}
          variant="standard"
          label="Password"
          type="text"
        />
      </StyledInputWrapper>
      <Button variant="contained" disableElevation onClick={handleAuthForm}>
        {isLogin ? "Login" : "Create account"}
      </Button>
    </StyledFormBox>
  );
};

export default AuthModalForm;
