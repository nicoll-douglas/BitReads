"use server";

import { BookActionsData } from "@/features/auth/types";

type Result =
  | {
      data: BookActionsData;
      error: false;
    }
  | {
      data: null;
      error: true;
    };

export default async function getVolumeInUserLists(
  volumeId: string,
  userId: string
): Promise<Result> {
  try {
    // make database call here to see which (if any) lists the volumeId is in for the user
    return {
      data: {
        haveRead: true,
        wantToRead: false,
        currentlyReading: true,
      },
      error: false,
    };
  } catch (err) {
    console.log(err);
    return { data: null, error: true };
  }
}
