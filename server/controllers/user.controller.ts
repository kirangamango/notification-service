import { RequestHandler } from "express";
import { UserFunction } from "../functions/user.function";

export const UserController: {
  create: RequestHandler;
  register: RequestHandler;
  getAll: RequestHandler;
  deleteAll: RequestHandler;
} = {
  async create(req, res, next) {
    try {
      const user = await UserFunction.create(req.body);

      res.json({
        success: true,
        data: user,
      });
    } catch (err) {
      console.log({ err });
      throw new Error("Error creating user");
    }
  },
  async register(req, res, next) {
    try {
      const user = await UserFunction.create(req.body);

      res.json({
        success: true,
        data: user,
      });
    } catch (err) {
      console.log({ err });
      throw new Error("Error creating user");
    }
  },
  async getAll(req, res, next) {
    try {
      const user = await UserFunction.getAll();

      res.json({
        success: true,
        data: user,
      });
    } catch (err) {
      console.log({ err });
      throw new Error("Error getting user");
    }
  },
  async deleteAll(req, res, next) {
    try {
      const user = await UserFunction.deleteAll();

      res.json({
        success: true,
        data: user,
      });
    } catch (err) {
      console.log({ err });
      throw new Error("Error getting user");
    }
  },
};
