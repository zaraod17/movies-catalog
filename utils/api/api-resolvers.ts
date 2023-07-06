import { apiResovlerQueries } from "./api-resolvers-queries";
import { resolverMutations } from "./api-resolvers-mutations";

export const resolvers = {
  Query: apiResovlerQueries,
  Mutation: resolverMutations,
};
