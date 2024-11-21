import React from "react";
import { Header } from "./_components";

export default function Layout({ children }: { children: React.ReactNode }) {
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
