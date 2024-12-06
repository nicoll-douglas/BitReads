"use client";

import type { Session } from "next-auth";
import React, { createContext } from "react";

export const AuthContext = createContext<Session | undefined>(undefined);

export function AuthProvider({
  children,
  session,
}: {
  children?: React.ReactNode;
  session: Session;
}) {
  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
