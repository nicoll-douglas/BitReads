import * as A from "@/components/atomic";
import { genIds } from "@/utils";

export default function Page() {
  const ids = genIds(2);

  return (
    <main className="flex-1 px-8 my-16 flex items-center justify-center">
      <A.Card>
        <div className="p-4">
          <h1 className="text-3xl">Login</h1>
        </div>
        <form className="px-4 pb-4 flex flex-col gap-6">
          <div className="flex flex-col">
            <A.form.Label htmlFor={ids["0"]} required>
              Username or Email:
            </A.form.Label>
            <A.form.Input className="w-full" id={ids["0"]} required />
            <A.form.ErrorMessage></A.form.ErrorMessage>
          </div>
          <div className="flex flex-col">
            <A.form.Label htmlFor={ids["1"]} required>
              Password:
            </A.form.Label>
            <A.form.Input
              className="w-full"
              id={ids["1"]}
              type="password"
              required
            />
            <A.form.ErrorMessage></A.form.ErrorMessage>
          </div>
          <A.Button type="submit">Submit</A.Button>
        </form>
      </A.Card>
    </main>
  );
}
