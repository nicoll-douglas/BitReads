import { z } from "zod";
import { signInSchema } from "../validation";

export interface SignInFormState {
  errors: z.inferFormattedError<typeof signInSchema> | undefined;
  data: z.infer<typeof signInSchema>;
}
