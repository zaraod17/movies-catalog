import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Query {
    hello: String
    movies: [Movie]
    moviesList(category: String): [Movie]
    singleMovie(id: ID!): Movie
    userFavoriteMovies(userEmail: String): [Movie]
    userMoviesList(userEmail: String): [Movie]
  }

  type Mutation {
    login(email: String!, password: String!): AuthPayload!
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
