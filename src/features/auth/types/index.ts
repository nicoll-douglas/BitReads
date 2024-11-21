import { z } from "zod";
import { validation } from "@/lib";

export interface RegisterFormState {
  errors: z.inferFormattedError<typeof validation.registerSchema> | undefined;
  data: z.infer<typeof validation.registerSchema>;
}
