import { useContext } from "react";
import { AuthContext } from "../contexts";

export default function useAuth() {
  const value = useContext(AuthContext);

  if (!value)
    throw new Error("AuthContext must be consumed within the provider");

  return value;
}
