"use client";

import React from "react";
import { useTheme } from "@/features/theme";

export default function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return <div className={`min-w-full bg-${theme}-300`}>{children}</div>;
}
