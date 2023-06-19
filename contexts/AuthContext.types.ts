import { LazyQueryHookOptions, QueryResult } from "@apollo/client";

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
