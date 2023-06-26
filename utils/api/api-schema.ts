import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    movies: [Movie]
    moviesList(category: String): [Movie]
    singleMovie(id: ID!): Movie
    userFavoriteMovies(userEmail: String): [Movie]
    userMoviesList(userEmail: String): [Movie]
    login(email: String!, password: String!): AuthPayload!
    loggedUser(email: String!): User!
  }

  type Mutation {
    register(email: String!, username: String!, password: String!): AuthPayload!
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
