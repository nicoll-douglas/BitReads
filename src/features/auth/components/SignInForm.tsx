"use client";

import { signInWithMagicLink } from "../actions";
import { useActionState } from "react";
import * as A from "@/components/atomic";
import { SignInFormState } from "../types";

interface LoginForm {
  "aria-labelledby": string;
}

export default function SignInForm(props: LoginForm) {
  const defaultState = {
    data: {
      email: "",
      confirmEmail: "",
    },
    errors: undefined,
  };

  const [state, action, isPending] = useActionState<SignInFormState, FormData>(
    signInWithMagicLink,
    defaultState
  );

  const emailError = state.errors?.email?._errors[0];
  const confirmEmailError = state.errors?.confirmEmail?._errors[0];

  return (
    <form
      action={action}
      className="px-4 pb-4 flex flex-col gap-6"
      aria-labelledby={props["aria-labelledby"]}
    >
      <div className="flex flex-col">
        <A.form.Label htmlFor={"email-field"} required>
          Email:
        </A.form.Label>
        <A.form.Input
          className="w-full"
          id={"email-field"}
          name="email"
          isInvalid={!!emailError}
          defaultValue={state.data.email}
          required
        />
        <A.form.ErrorMessage show={!!emailError}>
          {emailError}
        </A.form.ErrorMessage>
      </div>
      <div className="flex flex-col">
        <A.form.Label htmlFor={"confirm-email-field"} required>
          Confirm Email:
        </A.form.Label>
        <A.form.Input
          className="w-full"
          id={"confirm-email-field"}
          name="confirmEmail"
          isInvalid={!!confirmEmailError}
          defaultValue={state.data.confirmEmail}
          required
        />
        <A.form.ErrorMessage show={!!confirmEmailError}>
          {confirmEmailError}
        </A.form.ErrorMessage>
      </div>
      <A.Button isLoading={isPending} type="submit" className="px-4 h-9">
        Submit
      </A.Button>
    </form>
  );
}
