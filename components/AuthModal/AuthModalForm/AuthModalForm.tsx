import { useRef, useContext } from "react";

import { TextField, Button } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

import { StyledFormBox, StyledInputWrapper } from "../AuthModal.styled";
import { AuthContext } from "@/contexts/AuthContext";

const AuthModalForm: React.FC<{ mode: string }> = ({ mode }) => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const { handleLogin, handleModal } = useContext(AuthContext);

  const isLogin = mode === "login";

  const handleAuthForm = () => {
    if (isLogin) {
      handleLogin(true);
      handleModal(false);
    }
  };

  return (
    <StyledFormBox component="form">
      <StyledInputWrapper>
        <PersonIcon />
        <TextField
          ref={username}
          variant="standard"
          label="Login"
          type="text"
        />
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
