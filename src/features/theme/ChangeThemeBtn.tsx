/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IconButton } from "@/components/atomic";
import useTheme from "./useTheme";
import getNextTheme from "./getNextTheme";

export default function ChangeThemeBtn() {
  const { theme, setTheme } = useTheme();
  const nextTheme = getNextTheme(theme);

  return (
    <IconButton
      icon={{ src: "/icons/theme-icon.svg" }}
      aria-label="Change theme"
      onClick={() => setTheme(nextTheme)}
      size={8}
    />
  );
}
