"use client";

import Theme from "./Theme";
import { Button } from "@/components/atomic";
import useTheme from "./useTheme";

export default function ChangeThemeBtn() {
  const { theme, setTheme } = useTheme();
  let newTheme;

  switch (theme) {
    case Theme.A:
      newTheme = Theme.B;
      break;
    case Theme.B:
      newTheme = Theme.C;
      break;
    case Theme.C:
      newTheme = Theme.D;
      break;
    case Theme.D:
      newTheme = Theme.A;
  }

  return (
    <Button onClick={() => setTheme(newTheme)} className="px-4">
      Change Theme
    </Button>
  );
}
