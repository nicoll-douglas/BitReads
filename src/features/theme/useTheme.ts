import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
