import { z } from "zod";

const emailSchema = z
  .string({
    invalid_type_error: "Email is invalid",
    required_error: "Email is required",
  })
  .email("Email is invalid");

export default emailSchema;
