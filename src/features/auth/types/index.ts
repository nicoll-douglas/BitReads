import { z } from "zod";
import { validation } from "@/server";

export interface SignInFormState {
  errors: z.inferFormattedError<typeof validation.signInSchema> | undefined;
  data: z.infer<typeof validation.signInSchema>;
}
