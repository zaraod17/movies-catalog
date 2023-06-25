import {
  LazyQueryHookOptions,
  MutationHookOptions,
  ApolloError,
} from "@apollo/client";

type LoginResponseType = {
  login: {
    token: string;
  };
};

export type RegisterResponseType = [
  registerUser: (options?: MutationHookOptions) => void,
  result: {
    loading: boolean;
    error?: ApolloError | undefined;
    data?: { register: { token: string } };
  }
];

export type AuthResponseType = [
  getToken: (options?: LazyQueryHookOptions) => void,
  result: {
    loading: boolean;
    error?: ApolloError | undefined;
    data?: LoginResponseType;
  }
];

export interface TokenPayloadType {
  email: string;
  exp: number;
  iat: number;
  id: number;
}
