import * as A from "@/components/atomic";
import type { Metadata } from "next";
import { SignInForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "BitReads | Sign In",
};

export default function Page() {
  return (
    <A.Card>
      <div className="p-4 flex gap-4 flex-col">
        <h1 className="text-3xl" id={"sign-in-form-heading"}>
          Sign In
        </h1>
        <p>If your account doesn't exist we'll create one for you!</p>
      </div>
      <SignInForm aria-labelledby="sign-in-form-heading" />
    </A.Card>
  );
}
