import fs from "fs";
import path from "path";

import { JsonData } from "./ResolverTypes";

const filePath = path.join(process.cwd(), "data", "api-data.json");
const jsonData: JsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const resolvers = {
  Query: {
    // hello: () => "Hello, GraphQL!",
    movies: () => {
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
      const selectedMovie = jsonData.movies.find(
        (movie) => movie.id == args.id
      );

      return selectedMovie;
    },
  },
};
