import fs from "fs";
import path from "path";

import { JsonData } from "./ResolverTypes";

const filePath = path.join(process.cwd(), "data", "api-data.json");
const jsonData: JsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

export const resolvers = {
  Query: {
    // hello: () => "Hello, GraphQL!",
    getMovies: () => {
      return jsonData.movies;
    },
    getPopularMovies: () => {
      const sortedMovies = jsonData.movies.sort((a, b) => +b.views - +a.views);
      const firstTenMovies = sortedMovies.slice(0, 10);

      return firstTenMovies;
    },
    getLatestReleases: () => {
      const sortedMovies = jsonData.movies.sort(
        (a, b) => +b.productionYear - +a.productionYear
      );
      const firstTen = sortedMovies.slice(0, 10);

      return firstTen;
    },
    getUpcomingMovies: () => {
      const currentDate = new Date();
      const upcomingMovies = jsonData.movies.filter(
        (movie) => movie.productionYear >= currentDate.getFullYear()
      );

      const firstTen = upcomingMovies.slice(0, 10);

      return firstTen;
    },
  },
};
