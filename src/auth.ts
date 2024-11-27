import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import type { Provider } from "next-auth/providers";
import Resend from "next-auth/providers/resend";
import Google from "next-auth/providers/google";
import { mongo } from "@/server";

const providers: Provider[] = [
  Resend({
    from: "bitreads@nicolldouglas.dev",
  }),
  Google,
];

export const providerMap = providers
  .map((provider: Provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
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
