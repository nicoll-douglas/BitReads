/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/atomic";
import useTheme from "./useTheme";
import getNextTheme from "./getNextTheme";

export default function ChangeThemeBtn() {
  const { theme, setTheme } = useTheme();
  const nextTheme = getNextTheme(theme);

  return (
    <Button onClick={() => setTheme(nextTheme)} className="px-4">
      Change Theme
    </Button>
  );
}
