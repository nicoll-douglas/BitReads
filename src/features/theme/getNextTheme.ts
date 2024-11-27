/* eslint-disable @typescript-eslint/no-unused-vars */
import Themes from "./Themes";

export default function getNextTheme(currentTheme: Themes) {
  const { Default, ...rest } = Themes;
  const themesArray = Object.values(rest);

  const lastIndex = themesArray.length - 1;
  const currentIndex = themesArray.indexOf(currentTheme);

  if (currentIndex === lastIndex) return themesArray[0];

  return themesArray[currentIndex + 1];
}
