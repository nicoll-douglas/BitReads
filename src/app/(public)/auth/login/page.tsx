import * as A from "@/components/atomic";
import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "BitReads | Login",
};

export default async function Page() {
  const session = await auth();

  if (session) return redirect("/dashboard");

  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl" id={"login-form-heading"}>
          Login
        </h1>
      </div>
      <LoginForm aria-labelledby="login-form-heading" />
    </A.Card>
  );
}
