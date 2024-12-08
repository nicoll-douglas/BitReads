"use server";

import type { BookActionsData } from "../types";

export default async function getVolumeInUserLists(
  volumeId: string
): Promise<BookActionsData> {
  try {
    // make database call here to see which (if any) lists the volumeId is in for the user
    return {
      data: {
        haveRead: true,
        wantToRead: false,
        currentlyReading: true,
      },
    };
  } catch (err) {
    console.log(err);
    return { error: true };
  }
}
