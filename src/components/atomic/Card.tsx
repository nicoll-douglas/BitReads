"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";

export default function Card({
  children,
  defaultColor = false,
}: {
  children?: React.ReactNode;
  defaultColor?: boolean;
}) {
  let { theme } = useTheme();
  theme = defaultColor ? Themes.Default : theme;

  return (
    <div
      className={`w-container.xs bg-${theme}-200 border shadow-md border-t-4 border-black`}
    >
      {children}
    </div>
  );
}
