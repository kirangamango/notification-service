import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const configs = {
  JWT_SECRET: process.env.JWT_SECRET,
};

export { prisma, configs };
