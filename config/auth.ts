import { Response, Request, NextFunction } from "express";
import jwt from "jsonwebtoken";

type Payload = { userId: string };

export default function (req: any, res: any, next: NextFunction) {
  // Get token from header
  const token = req.header("Authorization");

  // Check if no token
  if (!token) {
    return res
      .json({ msg: "No token, authorization denied" });
  }
  // Verify token
  try {

    const payload: Payload | any = jwt.verify(token, "jwtSecretToken");
    console.log("payload", payload);
    req.userId = payload.id;
    next();
  } catch (err) {
    res
      .json({ msg: "Token is not valid" });
  }
}