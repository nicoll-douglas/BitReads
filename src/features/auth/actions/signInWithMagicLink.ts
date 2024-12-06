"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { SignInFormState } from "../types";
import { signInSchema } from "../validation";

export default async function signInWithMagicLink(
  previousState: SignInFormState,
  formData: FormData
) {
  const formObj = {
    email: String(formData.get("email") || ""),
    confirmEmail: String(formData.get("confirmEmail") || ""),
  };

  const result = signInSchema.safeParse(formObj);
  let newState: SignInFormState;

  if (!result.success) {
    newState = {
      errors: result.error.format(),
      data: formObj,
    };
    return newState;
  }

  newState = {
    errors: undefined,
    data: result.data,
  };

  try {
    await signIn("resend", formData);
    return newState;
  } catch (err) {
    if (err instanceof AuthError) {
      return redirect(`/auth/error?error=${err.type}`);
    }

    throw err;
  }
}
