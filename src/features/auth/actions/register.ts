"use server";

import { validation } from "@/lib";
import { RegisterFormState } from "../types";

const getAsString = (value: FormDataEntryValue | null) => String(value || "");

export default async function register(
  prevState: RegisterFormState,
  formData: FormData
) {
  const formObj = {
    email: getAsString(formData.get("email")),
    confirmEmail: getAsString(formData.get("confirmEmail")),
    username: getAsString(formData.get("username")),
    password: getAsString(formData.get("password")),
  };

  const result = validation.registerSchema.safeParse(formObj);

  let newState: RegisterFormState;

  if (!result.success) {
    newState = {
      errors: result.error?.format(),
      data: formObj,
    };
    return newState;
  }

  newState = {
    errors: undefined,
    data: result.data,
  };

  // store submitted data in database here, send email, and then update UI

  return newState;
}
