import fs from "fs";
import path from "path";

import {
  verifyToken,
  comparePassword,
  generateToken,
  hashPassword,
} from "./auth";

import { User } from "./auth-types";
import CustomError from "@/models/custom-error";

import { JsonData } from "./resolver-types";

const filePath = path.join(process.cwd(), "data", "api-data.json");
const jsonData: JsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const resolvers = {
  Query: {
    movies: (
      parent: any,
      args: { category: string },
      contextValue: any,
      info: any
    ) => {
      if (!contextValue.user) {
        throw new CustomError("Unauthorized", 401);
      }
      return jsonData.movies;
    },

    moviesList: (
      parent: any,
      args: { category: string },
      contextValue: any,
      info: any
    ) => {
      if (!contextValue.user) {
        throw new CustomError("Unauthorized", 401);
      }

      switch (args.category) {
        case "Popular Movies":
          const sortedMovies = jsonData.movies.sort(
            (a, b) => +b.views - +a.views
          );
          const firstTenMovies = sortedMovies.slice(0, 10);

          return firstTenMovies;
        case "Latest Releases":
          const sMovies = jsonData.movies.sort(
            (a, b) => +b.productionYear - +a.productionYear
          );
          const firstTen = sMovies.slice(0, 10);

          return firstTen;
        case "Upcoming Movies":
          const currentDate = new Date();
          const upcomingMovies = jsonData.movies.filter(
            (movie) => movie.productionYear >= currentDate.getFullYear()
          );

          const fTen = upcomingMovies.slice(0, 10);

          return fTen;
      }
    },

    singleMovie: (parent: any, args: any, contextValue: any, info: any) => {
      if (!contextValue.user) {
        throw new CustomError("Unauthorized", 401);
      }

      const selectedMovie = jsonData.movies.find(
        (movie) => movie.id == args.id
      );

      return selectedMovie;
    },

    userFavoriteMovies: (
      parent: any,
      args: { userEmail: string },
      contextValue: any,
      info: any
    ) => {
      if (!contextValue.user) {
        throw new CustomError("Unauthorized", 401);
      }

      const selectedUser = jsonData.users.find(
        (user) => user.email === args.userEmail
      );

      const favoriteMovieIdsSet = new Set(
        selectedUser?.favorites?.map((fav) => fav.movieId)
      );
      const favorites = jsonData.movies.filter((movie) =>
        favoriteMovieIdsSet.has(movie.id)
      );

      return favorites;
    },

    userMoviesList: (
      parent: any,
      args: { userEmail: string },
      contextValue: any,
      info: any
    ) => {
      if (!contextValue.user) {
        throw new CustomError("Unauthorized", 401);
      }

      const selectedUser = jsonData.users.find(
        (user) => user.email === args.userEmail
      );

      const userListIdsSet = new Set(
        selectedUser?.myList?.map((fav) => fav.movieId)
      );
      const userList = jsonData.movies.filter((movie) =>
        userListIdsSet.has(movie.id)
      );

      return userList;
    },

    login: async (parent: any, args: User, contextValue: any, info: any) => {
      const { email, password } = args;

      const user = jsonData.users.find((user) => user.email === email);

      if (!user) {
        throw new Error("User not found");
      }

      const hashedPassword = await hashPassword(password);

      const isMatch = password === user.password;

      if (!isMatch) {
        throw new CustomError("Incorrect password", 401);
      }

      const token = generateToken({ id: user.id, email: user.email });

      return { token: token ?? "" };
    },
  },
};
