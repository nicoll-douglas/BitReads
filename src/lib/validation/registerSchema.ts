import { z } from "zod";

const registerSchema = z
  .object({
    email: z.string().email("Email is invalid"),
    confirmEmail: z.string().email("Email is invalid"),
    username: z
      .string()
      .min(3, "Username must be at least 3 characters long")
      .max(20, "Username must be no more than 20 characters long")
      .regex(
        /^[a-zA-Z0-9_-]+$/,
        "Username may only contain letters, numbers, underscores and hyphens"
      ),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Password must be no more than 64 characters long")
      .regex(/[a-zA-Z]/, "Password must contain at least one letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
  })
  .refine(({ email, confirmEmail }) => email === confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });

export default registerSchema;
