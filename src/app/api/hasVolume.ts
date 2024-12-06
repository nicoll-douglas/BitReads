import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type ResponseData = {
  wantToRead: boolean;
  haveRead: boolean;
  currentlyReading: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") return res.status(405);
  const session = await auth();
  if (!session) return redirect("/auth/sign-in");

  try {
    // make database call with user id and volumeId to see if volumeId is in any of the lists
    // return result
    return res.status(200).json({
      wantToRead: Math.random() < 0.5,
      currentlyReading: Math.random() < 0.5,
      haveRead: Math.random() < 0.5,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .json({ wantToRead: false, currentlyReading: false, haveRead: false });
  }
}
