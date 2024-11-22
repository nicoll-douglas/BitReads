import * as A from "@/components/atomic";
import { genIds } from "@/utils";
import type { Metadata } from "next";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "BitReads | Login",
};

export default async function Page() {
  const ids = genIds(3);

  const session = await auth();

  if (session) return redirect("/dashboard");

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl" id={ids[2]}>
          Login
        </h1>
      </div>
      <form
        action={async (formData) => {
          "use server";
          try {
            await signIn("resend", formData);
          } catch (err) {
            if (err instanceof AuthError) {
              return redirect(`/auth/error?error=${err.type}`);
            }
            throw err;
          }
        }}
        className="px-4 pb-4 flex flex-col gap-6"
        aria-labelledby={ids[2]}
      >
        <div className="flex flex-col">
          <A.form.Label htmlFor={ids[0]} required>
            Email:
          </A.form.Label>
          <A.form.Input className="w-full" id={ids[0]} name="email" required />
          <A.form.ErrorMessage></A.form.ErrorMessage>
        </div>
        <A.Button type="submit" className="px-4 h-9">
          Submit
        </A.Button>
      </form>
    </A.Card>
  );
}
