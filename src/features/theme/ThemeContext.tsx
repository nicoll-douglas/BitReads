"use client";

import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import Themes from "./Themes";
import { useLocalStorage } from "@/hooks";

interface ThemeContextType {
  theme: Themes;
  setTheme: Dispatch<SetStateAction<Themes>>;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<Themes>("theme", Themes.Default);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
