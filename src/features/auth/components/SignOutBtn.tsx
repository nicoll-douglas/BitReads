import { Button } from "@/components/atomic";
import { signOut } from "../actions";

export default function SignOutBtn() {
  return (
    <form action={signOut}>
      <Button type="submit" className="px-4 h-9">
        Sign Out
      </Button>
    </form>
  );
}
