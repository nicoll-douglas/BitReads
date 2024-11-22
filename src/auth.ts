import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { db } from "@/lib";
import type { Provider } from "next-auth/providers";
import Resend from "next-auth/providers/resend";

const providers: Provider[] = [
  Resend({
    from: "bitreads@nicolldouglas.dev",
  }),
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
    signIn: "/auth/login",
    error: "/auth/error",
    verifyRequest: "/auth/verify",
    signOut: "/",
  },
  adapter: MongoDBAdapter(db.client),
  session: {
    strategy: "jwt",
  },
});
