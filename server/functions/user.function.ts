import { Prisma } from "@prisma/client";
import { prisma, configs } from "../configs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const UserFunction = {
  async create(data: Prisma.UserCreateInput) {
    const { first_name, last_name } = data;
    const currDate = new Date();
    // const user = prisma.$executeRaw`CREATE TABLE user (
    //   user_id INT AUTOINCREMENT PRIMARY KEY,
    //   first_name VARCHAR(255) NOT NULL,
    //   last_name VARCHAR(255) NULL,
    //   last_update DATE NOT NULL)`;
    const user =
      await prisma.$executeRaw`INSERT INTO "user" (first_name, last_name, last_update) VALUES(${first_name}, ${last_name}, ${currDate})`;
    return user;
  },
  async getAll() {
    const users = await prisma.$queryRaw`SELECT * FROM "user"`;
    return users;
  },
  // async signup(input: Prisma.UserCreateInput) {
  //   // Before creating check if the email already exists or not
  //   const isEmailExists = await prisma.user.findUnique({
  //     where: { email: input.email },
  //   });
  //   if (isEmailExists) throw new Error("Email already exists!");
  //   const { password, ...rest } = input;

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   const user = await prisma.user.create({
  //       data: {
  //         ...rest,
  //         password: hashedPassword,

  //       },
  //     });

  //   const token = jwt.sign(
  //     { userId: user?.id },
  //     configs.JWT_SECRET as string
  //   );
  //   return user;
  // },
  async deleteAll() {
    await prisma.$executeRaw`DROP TABLE "user"`;
  },
};
