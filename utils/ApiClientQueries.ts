import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query Query {
    movies {
      title
    }
  }
`;

export const GET_POPURLAR_MOVIES = gql`
  query Query {
    popularMovies {
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
    latestReleases {
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
    upcomingMovies {
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
