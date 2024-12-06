import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Resend({
      from: "bitreads@nicolldouglas.dev",
    }),
    Google,
  ],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    signOut: "/",
  },
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
});
