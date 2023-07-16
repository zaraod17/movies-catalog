import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    movies: [Movie]
    moviesList(category: String): [Movie]
    singleMovie(id: ID!): Movie
    userFavoriteMovies(userEmail: String): [Movie]
    userMoviesList(userEmail: String): [Movie]
    loggedUser(email: String!): User!
    searchedMovie(title: String!): [Movie]!
  }

  type Mutation {
    register(email: String!, username: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
    addFavoriteMovie(id: Int!, email: String!): MovieId!
    addMovieToUserList(id: Int!, email: String!): MovieId!
    removeFromFavorites(id: Int!, email: String): MovieId!
    removeFromUserList(id: Int!, email: String!): MovieId!
  }

  type MovieId {
    movieId: Int
  }

  type User {
    id: String
    email: String
    username: String
    favorites: [Movie]
    myList: [Movie]
  }

  type AuthPayload {
    token: String!
  }

  type Movie {
    id: ID!
    title: String
    imgUrl: String
    productionYear: Int
    sumOfRatings: Int
    numberOfRatings: Int
    description: String
    trailerUrl: String
    actors: [String]
    categories: [String]
    views: Int
  }
`;
