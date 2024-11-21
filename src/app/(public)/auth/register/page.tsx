import * as A from "@/components/atomic";
import type { Metadata } from "next";
import { RegisterForm } from "@/features/auth";

export const metadata: Metadata = {
  title: "BitReads | Register",
};

export default function Page() {
  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl" id={"registration-form"}>
          Register
        </h1>
      </div>
      <RegisterForm aria-labelledby={"registration-form"} />
    </A.Card>
  );
}
