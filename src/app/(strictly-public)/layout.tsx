import React from "react";
import { Header } from "./_components";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) return redirect("/dashboard");

  return (
    <>
      <Header />
      <div className="w-full max-w-container.xl flex flex-col pb-[69px] mx-auto flex-1">
        <main className="flex-1 px-4 lg:px-8 my-8 flex items-center justify-center">
          {children}
        </main>
      </div>
    </>
  );
}
