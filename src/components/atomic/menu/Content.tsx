"use client";

import { useTheme, Themes } from "@/features/theme";
import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLUListElement> {
  id: string;
  "aria-labelledby": string;
  themeSync?: boolean;
  alignment?: "right" | "left";
  offset?: "sm" | "md" | "lg";
}

export default function Content({
  className = "",
  children,
  themeSync = true,
  offset = "md",
  alignment = "right",
  ...rest
}: ContainerProps) {
  let { theme } = useTheme();
  theme = themeSync ? theme : Themes.Default;

  const classes = {
    default:
      "flex flex-col absolute p-2 w-52 border border-black z-50 shadow-lg",
    alignment: {
      left: "left-0",
      right: "right-0",
    },
    offset: {
      sm: "top-8",
      md: "top-9",
      lg: "top-10",
    },
  };

  return (
    <ul
      role="menu"
      className={`${classes.alignment[alignment]} ${classes.default} bg-${theme}-200 ${classes.offset[offset]} ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}
