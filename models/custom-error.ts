import { GraphQLError, GraphQLErrorExtensions } from "graphql";

class CustomError extends GraphQLError {
  constructor(message: string, extenstions: GraphQLErrorExtensions) {
    super(message, null, null, null, null, null, extenstions);

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
