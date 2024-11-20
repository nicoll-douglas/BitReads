import * as A from "@/components/atomic";
import { genIds } from "@/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BitReads | Register",
};

export default function Page() {
  const ids = genIds(10);

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl" id={ids["2"]}>
          Register
        </h1>
      </div>
      <form
        className="px-4 pb-4 flex flex-col gap-6"
        aria-labelledby={ids["2"]}
      >
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids["0"]} required>
            Email:
          </A.form.Label>
          <A.form.Input
            className="w-full"
            id={ids["0"]}
            type="email"
            required
          />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids["3"]} required>
            Confirm Email
          </A.form.Label>
          <A.form.Input
            className="w-full"
            id={ids["3"]}
            type="email"
            required
          />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids["4"]} required>
            Username
          </A.form.Label>
          <A.form.Input className="w-full" id={ids["4"]} required />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids["1"]} required>
            Password:
          </A.form.Label>
          <A.form.Input
            className="w-full"
            id={ids["1"]}
            type="password"
            required
          />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <A.Button type="submit">Submit</A.Button>
      </form>
    </A.Card>
  );
}
