import { createRouter } from "./context";
import { z } from "zod";
import { CreateUserSchema } from "../../schema/user.schema";
import { TRPCError } from "@trpc/server";

export const userRouter = createRouter().mutation("registerUser", {
  input: CreateUserSchema,
  async resolve({ ctx, input }) {
    const { name, email } = input;

    const userAlreadyExists = await ctx.prisma.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new TRPCError({ code: "CONFLICT", message: "User already exists" });
    }

    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  },
});

// Example with Context:
// .query("getAll", {
//   async resolve({ ctx }) {
//     return await ctx.prisma.example.findMany();
//   },
// });
