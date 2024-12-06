"use client";

import React, { useEffect, useState } from "react";
import * as A from "@/components/atomic";
import { getVolumeInUserLists } from "@/features/search-books/actions";
import type { BookActionsData } from "@/features/auth/types";
import { useAuth } from "@/features/auth";

interface BookActionsFormProps {
  volumeId: string;
  dialog: {
    firstFocusRef: React.RefObject<HTMLInputElement>;
    lastFocusRef: React.RefObject<HTMLButtonElement>;
    close: () => void;
  };
}

export default function BookActionsForm({
  volumeId,
  dialog,
}: BookActionsFormProps) {
  const [error, setError] = useState<boolean>(false);
  const [bookActionData, setBookActionData] = useState<BookActionsData>({
    haveRead: false,
    wantToRead: false,
    currentlyReading: false,
  });
  const session = useAuth();

  const currentlyReadingId = `cr-${volumeId}`;
  const wantToReadId = `wtr-${volumeId}`;
  const haveReadId = `hr-${volumeId}`;

  useEffect(() => {
    async function getData() {
      const { data, error } = await getVolumeInUserLists(
        volumeId,
        "userIdFromSession"
      );
      if (error) {
        return setError(true);
      }

      setBookActionData(data);
    }

    getData();
  }, [volumeId]);

  return error ? (
    <p>Something went wrong :(</p>
  ) : (
    <form className="flex gap-2 flex-col w-full">
      <div className="flex gap-3 items-center">
        <A.form.Label htmlFor={currentlyReadingId} className="mb-0 text-nowrap">
          Currently Reading
        </A.form.Label>
        <A.form.Checkbox
          id={currentlyReadingId}
          name="currentlyReading"
          className="ml-auto"
          ref={dialog.firstFocusRef}
          checked={bookActionData.currentlyReading}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBookActionData((v) => ({
              ...v,
              currentlyReading: e.target.checked,
            }))
          }
        />
      </div>
      <div className="flex gap-3 items-center">
        <A.form.Label htmlFor={wantToReadId} className="mb-0">
          Want to Read
        </A.form.Label>
        <A.form.Checkbox
          id={wantToReadId}
          name="wantToRead"
          className="ml-auto"
          checked={bookActionData.wantToRead}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBookActionData((v) => ({
              ...v,
              wantToRead: e.target.checked,
            }))
          }
        />
      </div>
      <div className="flex gap-3 items-center">
        <A.form.Label htmlFor={haveReadId} className="mb-0">
          Have Read
        </A.form.Label>
        <A.form.Checkbox
          id={haveReadId}
          name="haveRead"
          className="ml-auto"
          checked={bookActionData.haveRead}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setBookActionData((v) => ({
              ...v,
              haveRead: e.target.checked,
            }))
          }
        />
      </div>
      <A.Button
        size="sm"
        type="submit"
        ref={dialog.lastFocusRef}
        onClick={dialog.close}
      >
        Save
      </A.Button>
    </form>
  );
}
