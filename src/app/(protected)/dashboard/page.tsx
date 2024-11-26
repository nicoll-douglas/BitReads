import { SignOutBtn } from "@/features/auth";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function Page() {
  return (
    <div>
      Authenticated, seeing dashboard.
      <SignOutBtn />
    </div>
  );
}
