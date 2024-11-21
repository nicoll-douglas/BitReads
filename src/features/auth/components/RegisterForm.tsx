"use client";

import * as A from "@/components/atomic";
import { register } from "../actions";
import { RegisterFormState } from "../types";
import { useActionState } from "react";

interface RegisterForm {
  "aria-labelledby": string;
}

export default function RegisterForm(props: RegisterForm) {
  const [state, action, isPending] = useActionState<
    RegisterFormState,
    FormData
  >(register, {
    errors: undefined,
    data: {
      email: "",
      confirmEmail: "",
      username: "",
      password: "",
    },
  });

  const { errors, data } = state;
  const emailError = errors?.email?._errors[0];
  const confirmEmailError = errors?.confirmEmail?._errors[0];
  const usernameError = errors?.username?._errors[0];
  const passwordError = errors?.password?._errors[0];

  return (
    <form
      className="px-4 pb-4 flex flex-col gap-6"
      aria-labelledby={props["aria-labelledby"]}
      action={action}
    >
      <div className="flex flex-col">
        <A.form.Label htmlFor={"email-input"} required>
          Email:
        </A.form.Label>
        <A.form.Input
          className="w-full"
          id={"email-input"}
          name="email"
          defaultValue={data?.email}
          required
          isInvalid={!!emailError}
        />
        <A.form.ErrorMessage show={!!emailError}>
          {emailError}
        </A.form.ErrorMessage>
      </div>
      <div className="flex flex-col">
        <A.form.Label htmlFor={"confirm-email-input"} required>
          Confirm Email
        </A.form.Label>
        <A.form.Input
          className="w-full"
          id={"confirm-email-input"}
          name="confirmEmail"
          defaultValue={data?.confirmEmail}
          required
          isInvalid={!!confirmEmailError}
        />
        <A.form.ErrorMessage show={!!confirmEmailError}>
          {confirmEmailError}
        </A.form.ErrorMessage>
      </div>
      <div className="flex flex-col">
        <A.form.Label htmlFor={"username-input"} required>
          Username
        </A.form.Label>
        <A.form.Input
          id={"username-input"}
          className="w-full"
          name="username"
          defaultValue={data?.username}
          required
          isInvalid={!!usernameError}
        />
        <A.form.ErrorMessage show={!!usernameError}>
          {usernameError}
        </A.form.ErrorMessage>
        <A.form.HelperText>
          <li>Must be between 3 and 20 characters long</li>
          <li>May only contain letters, numbers, underscores and hyphens</li>
        </A.form.HelperText>
      </div>
      <div className="flex flex-col">
        <A.form.Label htmlFor={"password-input"} required>
          Password:
        </A.form.Label>
        <A.form.PasswordInput
          name="password"
          className="w-full"
          id={"password-input"}
          isInvalid={!!passwordError}
          defaultValue={data?.password}
          required
        />
        <A.form.ErrorMessage show={!!passwordError}>
          {passwordError}
        </A.form.ErrorMessage>
        <A.form.HelperText>
          <li>Must be between 8 and 64 characters long</li>
          <li>Must contain at least one letter and one number</li>
        </A.form.HelperText>
      </div>
      <A.Button isLoading={isPending} type="submit" className="px-4 h-9">
        Submit
      </A.Button>
    </form>
  );
}
