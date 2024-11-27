import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Header, Main, Container } from "./_components";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) return redirect("/auth/sign-in");

  return (
    <Container>
      <div className="p-4 flex flex-col min-h-dvh max-w-[1440px] w-full mx-auto">
        <Header />
        <Main>{children}</Main>
      </div>
    </Container>
  );
}
