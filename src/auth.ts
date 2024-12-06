import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { mongo } from "@/server";

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
  adapter: MongoDBAdapter(mongo.client),
  session: {
    strategy: "jwt",
  },
});
