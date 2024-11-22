import * as A from "@/components/atomic";

export default function Page() {
  return (
    <A.Card>
      <div className="p-4">
        <h1 className="text-3xl">Check Your Email</h1>
      </div>
      <div className="px-4 pb-4">
        Please check your email, a link to sign in has been sent to you.
      </div>
    </A.Card>
  );
}
