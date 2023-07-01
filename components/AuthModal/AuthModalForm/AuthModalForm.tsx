import { useRef, useContext } from "react";
import { TextField, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import { StyledFormBox, StyledInputWrapper } from "../AuthModal.styled";
import { AuthContext } from "@/contexts/AuthContext";

const AuthModalForm: React.FC<{ mode: string }> = ({ mode }) => {
  const email = useRef<HTMLInputElement>(null);
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const form = useRef<HTMLFormElement>(null);

  const { handleLogin, loginError, registerUser } = useContext(AuthContext);

  const isLogin = mode === "login";

  const handleAuthForm = () => {
    if (mode === "login") {
      handleLogin(email.current?.value, password.current?.value);
      form.current?.reset();
    } else if (mode === "signup") {
      registerUser(
        email.current?.value,
        username.current?.value,
        password.current?.value
      );
      form.current?.reset();
    }
  };

  return (
    <StyledFormBox ref={form} component="form">
      <StyledInputWrapper>
        <PersonIcon />
        <TextField
          inputRef={email}
          variant="standard"
          label="Email"
          type="email"
        />
      </StyledInputWrapper>

      {mode === "signup" && (
        <StyledInputWrapper>
          <PersonIcon />
          <TextField
            inputRef={username}
            variant="standard"
            label="Username"
            type="text"
          />
        </StyledInputWrapper>
      )}
      <StyledInputWrapper>
        <PasswordIcon />
        <TextField
          inputRef={password}
          variant="standard"
          label="Password"
          type="password"
        />
      </StyledInputWrapper>
      {loginError && (
        <Typography component="span" variant="caption">
          {loginError}
        </Typography>
      )}
      <Button variant="contained" disableElevation onClick={handleAuthForm}>
        {isLogin ? "Login" : "Create account"}
      </Button>
    </StyledFormBox>
  );
};

export default AuthModalForm;
