import fs from "fs";
import path from "path";

import CustomError from "@/models/custom-error";

import { JsonData } from "./resolver-types";

const filePath = path.join(process.cwd(), "data", "api-data.json");
const jsonData: JsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const apiResovlerQueries = {
  movies: (
    parent: any,
    args: { category: string },
    contextValue: any,
    info: any
  ) => {
    return jsonData.movies;
  },

  moviesList: (
    parent: any,
    args: { category: string },
    contextValue: any,
    info: any
  ) => {
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
    const selectedMovie = jsonData.movies.find((movie) => movie.id == args.id);

    return selectedMovie;
  },

  userFavoriteMovies: (
    parent: any,
    args: { userEmail: string },
    contextValue: any,
    info: any
  ) => {
    if (!contextValue.user) {
      throw new CustomError("Unauthorized", {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      });
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
      throw new CustomError("Unauthorized", {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      });
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

  loggedUser: (
    parent: any,
    args: { email: string },
    contextValue: any,
    info: any
  ) => {
    if (!contextValue.user) {
      throw new CustomError("Unauthorized", {
        code: "UNAUTHENTICATED",
        http: { status: 401 },
      });
    }

    const loggedUser = jsonData.users.find((user) => user.email === args.email);

    const userFavoriteMovies = new Set(
      loggedUser?.favorites.map((movie) => movie.movieId)
    );
    const userListMovies = new Set(
      loggedUser?.myList.map((movie) => movie.movieId)
    );

    let favorites = [];
    let userList = [];

    for (const movie of jsonData.movies) {
      if (userFavoriteMovies.has(movie.id)) {
        favorites.push(movie);
      }

      if (userListMovies.has(movie.id)) {
        userList.push(movie);
      }
    }

    const newLoggedUser = {
      id: loggedUser?.id,
      email: loggedUser?.email,
      username: loggedUser?.username,
      favorites: favorites,
      myList: userList,
    };

    return newLoggedUser;
  },

  searchedMovie: (
    parent: any,
    args: { title: string },
    contextValue: any,
    info: any
  ) => {
    const selectedMovies = [];

    for (const movie of jsonData.movies) {
      if (movie.title.toLowerCase().includes(args.title)) {
        selectedMovies.push(movie);
      }
    }

    if (!selectedMovies || !args.title) {
      throw new CustomError("Movie not found", {
        code: "NOT_FOUND",
        http: { status: 404 },
      });
    }

    return selectedMovies;
  },
};
