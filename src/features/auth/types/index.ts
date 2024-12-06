import { z } from "zod";
import { signInSchema } from "../validation";

export interface SignInFormState {
  errors: z.inferFormattedError<typeof signInSchema> | undefined;
  data: z.infer<typeof signInSchema>;
}

export interface BookActionsData {
  currentlyReading: boolean;
  wantToRead: boolean;
  haveRead: boolean;
}
