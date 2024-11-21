import * as A from "@/components/atomic";
import { genIds } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitReads | Login",
};

export default function Page() {
  const ids = genIds(3);

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl" id={ids[2]}>
          Login
        </h1>
      </div>
      <form className="px-4 pb-4 flex flex-col gap-6" aria-labelledby={ids[2]}>
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids[0]} required>
            Username or Email:
          </A.form.Label>
          <A.form.Input
            className="w-full"
            id={ids[0]}
            name="usernameOrEmail"
            required
          />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids[1]} required>
            Password:
          </A.form.Label>
          <A.form.PasswordInput
            name="password"
            className="w-full"
            id={ids[1]}
            required
          />
          <div className="flex justify-between items-start gap-4 mt-1">
            <A.form.ErrorMessage className="mt-0">
              error with password, please type
            </A.form.ErrorMessage>
            <A.Link
              href="/auth/forgot"
              className="text-lg leading-5 text-nowrap ml-auto"
            >
              Forgot password?
            </A.Link>
          </div>
        </div>
        <A.Button type="submit" className="px-4 h-9">
          Submit
        </A.Button>
      </form>
    </A.Card>
  );
}
