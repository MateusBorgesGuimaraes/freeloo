import { z } from "zod";

export const registerSchema = z.object({
  email: z.email(),
  name: z
    .string()
    .min(3, "The name must be at least 3 characters long")
    .max(50, "The name must have less than 50 characters"),
  password: z.string().max(50),
});

export type RegisterSchemaData = z.infer<typeof registerSchema>;
