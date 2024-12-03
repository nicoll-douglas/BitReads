"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";

interface CardProps {
  children?: React.ReactNode;
  defaultColor?: boolean;
  className?: string;
}

export default function Card({
  children,
  defaultColor = false,
  className = "",
}: CardProps) {
  let { theme } = useTheme();
  theme = defaultColor ? Themes.Default : theme;

  return (
    <div
      className={`w-container.xs bg-${theme}-200 border shadow-md border-t-4 border-black ${className}`}
    >
      {children}
    </div>
  );
}
