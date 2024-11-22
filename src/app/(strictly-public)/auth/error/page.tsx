import type { Metadata } from "next";
import { AuthErrorDisplay } from "../../_components";

export const metadata: Metadata = {
  title: "BitReads | Oops!",
};

export default function Page() {
  return <AuthErrorDisplay />;
}
