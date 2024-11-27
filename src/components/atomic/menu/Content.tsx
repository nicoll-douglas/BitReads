"use client";

import { useTheme, Themes } from "@/features/theme";
import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLUListElement> {
  id: string;
  "aria-labelledby": string;
  margin?: number | string;
  defaultColor?: boolean;
}

export default function Content({
  className = "",
  children,
  margin = 11,
  defaultColor = false,
  ...rest
}: ContainerProps) {
  let { theme } = useTheme();
  theme = defaultColor ? Themes.Default : theme;

  return (
    <ul
      role="menu"
      className={`flex flex-col absolute top-0 right-0 bg-${theme}-200 p-2 w-52 border border-black z-50 shadow-lg mt-${margin} ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}
