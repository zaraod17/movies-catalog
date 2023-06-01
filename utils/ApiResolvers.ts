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
    popularMovies: () => {
      const sortedMovies = jsonData.movies.sort((a, b) => +b.views - +a.views);
      const firstTenMovies = sortedMovies.slice(0, 10);

      return firstTenMovies;
    },
    latestReleases: () => {
      const sortedMovies = jsonData.movies.sort(
        (a, b) => +b.productionYear - +a.productionYear
      );
      const firstTen = sortedMovies.slice(0, 10);

      return firstTen;
    },
    upcomingMovies: () => {
      const currentDate = new Date();
      const upcomingMovies = jsonData.movies.filter(
        (movie) => movie.productionYear >= currentDate.getFullYear()
      );

      const firstTen = upcomingMovies.slice(0, 10);

      return firstTen;
    },
    singleMovie: (parent: any, args: any, contextValue: any, info: any) => {
      const selectedMovie = jsonData.movies.find(
        (movie) => movie.id == args.id
      );

      return selectedMovie;
    },
  },
};
