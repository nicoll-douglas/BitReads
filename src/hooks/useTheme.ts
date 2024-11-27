import { Themes } from "@/constants";
import useLocalStorage from "./useLocalStorage";

export default function useTheme() {
  const { value, setValue } = useLocalStorage<Themes>(
    "br_theme",
    Themes.Default
  );

  return { theme: value, setTheme: setValue, Themes };
}
