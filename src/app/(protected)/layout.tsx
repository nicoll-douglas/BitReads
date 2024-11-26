import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Header } from "./_components";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) return redirect("/auth/sign-in");

  return (
    <div className="p-4 flex flex-col min-h-dvh max-w-[1920px] w-full mx-auto">
      <Header />
      <main
        className="flex-1 border border-black bg-cyan-200 shadow-sm p-4 sticky top-0 overflow-y-auto"
        style={{ maxHeight: "calc(100dvh - 76px)" }}
      >
        <div style={{ minHeight: "200dvh" }}>bing bong hello</div>
        {children}
      </main>
    </div>
  );
}
