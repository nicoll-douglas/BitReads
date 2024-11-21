import { z } from "zod";

const loginSchema = z.object({
  usernameOrEmail: z
    .string({
      required_error: "Username or email is required",
    })
    .min(1, "Username or email is required"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required"),
});

export default loginSchema;
