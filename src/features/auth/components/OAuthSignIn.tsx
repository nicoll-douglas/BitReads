import { signInWithGoogle } from "../actions";
import { Button } from "@/components/atomic";
import Image from "next/image";

export default function OAuthSignIn() {
  return (
    <section aria-label="Sign In With OAuth" className="flex p-4 flex-col">
      <form action={signInWithGoogle}>
        <Button className="w-full gap-2 px-4" type="submit" themeSync={false}>
          <Image
            src={"/icons/google-icon.svg"}
            width={33}
            height={33}
            alt=""
            className="w-5 h-5"
          />
          Sign in with Google
        </Button>
      </form>
    </section>
  );
}
