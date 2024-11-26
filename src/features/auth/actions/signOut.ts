"use server";

import { signOut as signOutCallback } from "@/auth";

export default async function signOut() {
  await signOutCallback();
}
