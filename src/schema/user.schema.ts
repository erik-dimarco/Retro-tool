import z from "zod";

export const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export type CreateUserInput = z.infer<typeof CreateUserSchema>;
