"use client";

import React from "react";
import { useTheme } from "@/features/theme";

export default function Main({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <main
      className={`flex-1 border border-black bg-${theme}-200 shadow-sm p-4 sticky top-0 overflow-y-auto`}
      style={{ maxHeight: "calc(100dvh - 76px)" }}
    >
      {children}
    </main>
  );
}
