import { useContext } from "react";
import { BookActionsMenuContext } from "../contexts";

export default function useBookActionsMenu() {
  const value = useContext(BookActionsMenuContext);

  if (!value)
    throw new Error(
      "BookActionsMenuContext must be consumed within the provider"
    );

  return value;
}
