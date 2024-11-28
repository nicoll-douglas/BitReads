/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { IconButton, ButtonProps } from "@/components/atomic";
import useTheme from "./useTheme";
import getNextTheme from "./getNextTheme";

export default function ChangeThemeBtn(props: ButtonProps) {
  const { theme, setTheme } = useTheme();
  const nextTheme = getNextTheme(theme);

  return (
    <IconButton
      icon="/icons/theme-icon.svg"
      aria-label="Change theme"
      onClick={() => setTheme(nextTheme)}
      {...props}
    />
  );
}
