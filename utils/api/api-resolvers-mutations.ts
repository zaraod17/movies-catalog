import fs from "fs";
import path from "path";

import { generateToken } from "../auth";

import { User } from "../auth-types";
import CustomError from "@/models/custom-error";

import { JsonData } from "./resolver-types";

const filePath = path.join(process.cwd(), "data", "api-data.json");
const jsonData: JsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const resolverMutations = {
  register: (
    parent: any,
    args: { email: string; username: string; password: string },
    contextValue: any,
    info: any
  ) => {
    const { email, username, password } = args;

    const selectedUser = jsonData.users.find(
      (user) => user.email === email || user.username === username
    );

    if (selectedUser) {
      throw new CustomError("Username or email already exists.", {
        code: "FORBIDDEN",
        http: { status: 409 },
      });
    }

    if (!email) {
      throw new CustomError("Please provide an email", {
        code: "BAD_REQUEST",
        http: { status: 400 },
      });
    }

    if (!username) {
      throw new CustomError("Please provide a username", {
        code: "BAD_REQUEST",
        http: { status: 400 },
      });
    }

    if (!password) {
      throw new CustomError("Please provide a password", {
        code: "BAD_REQUEST",
        http: { status: 400 },
      });
    }

    const id = jsonData.users.length + 1;

    const newUser = {
      id,
      username,
      email,
      password,
      favorites: [],
      myList: [],
    };

    jsonData.users.push(newUser);

    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));

    const generatedToken = generateToken({
      id: newUser.id,
      email: newUser.email,
    });

    return { token: generatedToken ?? "" };
  },

  login: async (parent: any, args: User, contextValue: any, info: any) => {
    const { email, password } = args;

    const user = jsonData.users.find((user) => user.email === email);

    if (!user) {
      throw new CustomError("User not found", {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      });
    }

    const isMatch = password === user.password;

    if (!isMatch) {
      throw new CustomError("Wrong password", {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      });
    }

    const token = generateToken({ id: user.id, email: user.email });

    return { token: token ?? "" };
  },

  addFavoriteMovie: (
    parent: any,
    args: { id: number | string; email: string },
    contextValue: any,
    info: any
  ) => {
    const { id, email } = args;
    const data = { ...jsonData };

    const selectedUser = jsonData.users.find((user) => user.email === email);
    const userIndex = data.users.findIndex((user) => user.email === email);

    const isIdInList = selectedUser?.favorites.find(
      (fav) => fav.movieId === id
    );

    if (!!isIdInList) {
      throw new CustomError("Movie is already in list", {
        code: "BAD_REQUEST",
        http: { status: 400 },
      });
    }

    selectedUser?.favorites.push({ movieId: id });

    data.users.splice(userIndex, 1, selectedUser!);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return { movieId: id };
  },

  addMovieToUserList: (
    parent: any,
    args: { id: number | string; email: string },
    contextValue: any,
    info: any
  ) => {
    const { id, email } = args;
    const data = { ...jsonData };

    const selectedUser = jsonData.users.find((user) => user.email === email);
    const userIndex = data.users.findIndex((user) => user.email === email);

    const isIdInList = selectedUser?.myList.find((fav) => fav.movieId === id);

    if (!!isIdInList) {
      throw new CustomError("Movie is already in list", {
        code: "BAD_REQUEST",
        http: { status: 400 },
      });
    }

    selectedUser?.myList.push({ movieId: id });

    data.users.splice(userIndex, 1, selectedUser!);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return { movieId: id };
  },

  removeFromFavorites: (
    parent: any,
    args: { id: number | string; email: string },
    contextValue: any,
    info: any
  ) => {
    const { email, id } = args;
    const data = { ...jsonData };

    const selectedUser = jsonData.users.find((user) => user.email === email);
    const userIndex = data.users.findIndex((user) => user.email === email);

    const movieIdIndex = selectedUser?.favorites.findIndex(
      (movId) => movId.movieId === id
    );

    selectedUser?.favorites.splice(movieIdIndex!, 1);

    data.users.splice(userIndex, 1, selectedUser!);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return { movieId: id };
  },

  removeFromUserList: (
    parent: any,
    args: { id: number | string; email: string },
    contextValue: any,
    info: any
  ) => {
    const { email, id } = args;
    const data = { ...jsonData };

    const selectedUser = jsonData.users.find((user) => user.email === email);
    const userIndex = data.users.findIndex((user) => user.email === email);

    const movieIdIndex = selectedUser?.myList.findIndex(
      (movId) => movId.movieId === id
    );

    selectedUser?.myList.splice(movieIdIndex!, 1);

    data.users.splice(userIndex, 1, selectedUser!);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return { movieId: id };
  },
};
