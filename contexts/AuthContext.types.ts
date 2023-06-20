import { LazyQueryHookOptions } from "@apollo/client";

type LoginResponseType = {
  login: {
    token: string;
  };
};

export type AuthResponseType = [
  getToken: (options?: LazyQueryHookOptions) => void,
  result: {
    loading: boolean;
    error?: any;
    data?: LoginResponseType;
  }
];

export interface TokenPayloadType {
  email: string;
  exp: number;
  iat: number;
  id: number;
}
