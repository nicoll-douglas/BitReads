"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { LoginFormState } from "../types";
import { validation } from "@/lib";
import { z } from "zod";

export default async function login(
  previousState: LoginFormState,
  formData: FormData
) {
  const formObj = {
    email: String(formData.get("email") || ""),
  };

  const emailSchema = z.object({ email: validation.emailSchema });

  const result = emailSchema.safeParse(formObj);
  let newState: LoginFormState;

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
