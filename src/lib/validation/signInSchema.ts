import { z } from "zod";

const emailSchema = z
  .string({
    required_error: "Email is required",
    invalid_type_error: "Email is invalid",
  })
  .email("Email is invalid");

const signInSchema = z
  .object({
    email: emailSchema,
    confirmEmail: emailSchema,
  })
  .refine(({ email, confirmEmail }) => email === confirmEmail, {
    message: "Emails do not match",
    path: ["confirmEmail"],
  });

export default signInSchema;
