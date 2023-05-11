export type AuthMode = "login" | "signup";

export interface AuthModalProps {
  onModalClose: () => void;
  modalOpen: boolean;
}
