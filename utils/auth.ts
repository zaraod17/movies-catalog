import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import { AuthToken } from "./auth-types";

export const generateToken = (payload: AuthToken) => {
  // Generate JWT with provided payload
  const token = jwt.sign(payload, "my-secret-key", { expiresIn: "1h" });

  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, "my-secret-key");
    return decoded;
  } catch (error) {
    throw new Error("Invalid token.");
  }
};

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);

  return isMatch;
};
