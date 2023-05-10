export type AuthMode = "login" | "signup";

export interface AuthModalProps {
  onModalClose: () => void;
  onLogin: () => void;
  modalOpen: boolean;
}
