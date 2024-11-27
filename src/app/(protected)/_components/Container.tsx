"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";
import { Style } from "@/components/common";

export default function Container({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`min-w-full bg-${theme}-300`}>
      {theme === Themes.B && (
        <Style>{`
      :focus-visible {
        outline-color: #3b82f6;
      }

      ::selection {
        background-color: #3b82f6;
      }
    `}</Style>
      )}
      {children}
    </div>
  );
}
