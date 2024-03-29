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
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const REGISTER = gql`
  mutation Mutation($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
      token
    }
  }
`;

export const USER_INFO = gql`
  query Query($email: String!) {
    loggedUser(email: $email) {
      id
      email
      username
      favorites {
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
      myList {
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
  }
`;

export const USER_FAVORITE_MOVIES = gql`
  query Query($email: String!) {
    loggedUser(email: $email) {
      favorites {
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
  }
`;

export const USER_LIST_MOVIES = gql`
  query Query($email: String!) {
    loggedUser(email: $email) {
      myList {
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
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation Mutation($id: Int!, $email: String!) {
    addFavoriteMovie(id: $id, email: $email) {
      movieId
    }
  }
`;

export const ADD_TO_USER_LIST = gql`
  mutation Mutation($id: Int!, $email: String!) {
    addMovieToUserList(id: $id, email: $email) {
      movieId
    }
  }
`;

export const GET_SEARCHED_MOVIES = gql`
  query Query($title: String!) {
    searchedMovie(title: $title) {
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
