import React from "react";
import { Header } from "./_components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="w-full max-w-container.xl flex flex-col pb-20 mx-auto flex-1">
        {children}
      </div>
    </>
  );
}
