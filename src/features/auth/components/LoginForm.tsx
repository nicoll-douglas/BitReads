"use client";

import { login } from "../actions";
import { useActionState } from "react";
import * as A from "@/components/atomic";
import { LoginFormState } from "../types";

interface LoginForm {
  "aria-labelledby": string;
}

export default function LoginForm(props: LoginForm) {
  const [state, action, isPending] = useActionState<LoginFormState, FormData>(
    login,
    {
      data: {
        email: "",
      },
      errors: undefined,
    }
  );

  const errorMsg = state.errors?.email?._errors[0];

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
          isInvalid={!!errorMsg}
          defaultValue={state.data.email}
          required
        />
        <A.form.ErrorMessage show={!!errorMsg}>{errorMsg}</A.form.ErrorMessage>
      </div>
      <A.Button isLoading={isPending} type="submit" className="px-4 h-9">
        Submit
      </A.Button>
    </form>
  );
}
