import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import type { NextApiRequest, NextApiResponse } from "next";

import { resolvers } from "@/utils/api-resolvers";
import { typeDefs } from "@/utils/api-schema";
import {
  hashPassword,
  comparePassword,
  generateToken,
  verifyToken,
} from "@/utils/auth";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: ({ req }) => {
    // Get the token from the request headers
    const token = req.headers.authorization || "";

    // Verify the token and extract the user information if it's valid
    const user = token ? verifyToken(token) : null;

    return { user };
  },
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
