"use client";

import { useTheme, Themes } from "@/features/theme";
import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLUListElement> {
  id: string;
  "aria-labelledby": string;
  themeSync?: boolean;
  alignment?: "right" | "left";
}

export default function Content({
  className = "",
  children,
  themeSync = true,
  ...rest
}: ContainerProps) {
  let { theme } = useTheme();
  theme = themeSync ? theme : Themes.Default;

  const classes = {
    default: "flex flex-col absolute p-2 border border-black z-50 shadow-lg",
  };

  return (
    <ul
      role="menu"
      className={`${classes.default} bg-${theme}-200 ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}
