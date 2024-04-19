// import PRISMA from "@prisma/client";
// import { NextFunction, Request, Response } from "express";
// import { Unauthorized, NotFound } from "http-errors";
// import jwt from "jsonwebtoken";
// import { configs, prisma } from "../configs";

// interface JwtPayload {
//   userId: string;
// }
// declare global {
//   namespace Express {
//     interface Request {
//       currentUser?: PRISMA.User;
//     }
//   }
// }

// export const verifyToken = async (req: Request) => {
//   const accessToken = req.header("x-access-token");
//   if (!accessToken) throw new NotFound("token not found");

//   const jwtSecret = configs.JWT_SECRET;
//   if (!jwtSecret) throw new Error("JWT secret is not set");

//   const decodedToken = jwt.verify(accessToken, jwtSecret) as JwtPayload;

//   const user = await prisma.user.findUnique({
//     where: { id: decodedToken.userId },
//   });
//   if (!user) throw new Unauthorized("User not found");

//   return user;
// };

// export const authenticate = {
//   admin: async (req: Request, _res: Response, next: NextFunction) => {
//     try {
//       const user = await verifyToken(req);
//       if (user.role !== "ADMIN")
//         throw Unauthorized("You can't perform this action!");
//       req.currentUser = user;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
//   any: async (req: Request, _res: Response, next: NextFunction) => {
//     try {
//       const user = await verifyToken(req);
//       if (!user.role) throw Unauthorized("You can't perform this action!");
//       req.currentUser = user;
//       next();
//     } catch (error) {
//       next(error);
//     }
//   },
// };
