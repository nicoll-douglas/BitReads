import { z } from "zod";
import { validation } from "@/lib";

export interface RegisterFormState {
  errors: z.inferFormattedError<typeof validation.registerSchema> | undefined;
  data: z.infer<typeof validation.registerSchema>;
}

const emailSchema = z.object({ email: validation.emailSchema });

export interface LoginFormState {
  errors: z.inferFormattedError<typeof emailSchema> | undefined;
  data: z.infer<typeof emailSchema>;
}
