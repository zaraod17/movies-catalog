import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query Query {
    movies {
      title
    }
  }
`;

export const GET_MOVIES_LIST = gql`
  query Query($category: String!) {
    moviesList(category: $category) {
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
