import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query Query {
    getMovies {
      title
    }
  }
`;

export const GET_POPURLAR_MOVIES = gql`
  query Query {
    getPopularMovies {
      id
      title
      imgUrl
      productionYear
      sumOfRatings
      numberOfRatings
      description
      trailerUrl
      actors
      categories
      views
    }
  }
`;

export const GET_LATEST_RELEASES = gql`
  query Query {
    getLatestReleases {
      id
      title
      imgUrl
      productionYear
      sumOfRatings
      numberOfRatings
      description
      trailerUrl
      actors
      categories
      views
    }
  }
`;

export const GET_UPCOMING_MOVIES = gql`
  query Query {
    getUpcomingMovies {
      id
      title
      imgUrl
      productionYear
      sumOfRatings
      numberOfRatings
      description
      trailerUrl
      actors
      categories
      views
    }
  }
`;
