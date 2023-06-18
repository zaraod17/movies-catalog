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

export const GET_SINGLE_MOVIE = gql`
  query Query($id: ID!) {
    singleMovie(id: $id) {
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

export const LOGIN = gql`
  query Query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
