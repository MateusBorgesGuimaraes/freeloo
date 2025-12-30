import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().max(50),
});

export type LoginSchemaData = z.infer<typeof loginSchema>;
