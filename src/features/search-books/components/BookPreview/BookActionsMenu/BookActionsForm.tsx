import React from "react";
import * as A from "@/components/atomic";

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
  const currentlyReadingId = `cr-${volumeId}`;
  const wantToReadId = `wtr-${volumeId}`;
  const haveReadId = `hr-${volumeId}`;

  return (
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
        />
      </div>
      <div className="flex gap-3 items-center">
        <A.form.Label htmlFor={haveReadId} className="mb-0">
          Have Read
        </A.form.Label>
        <A.form.Checkbox id={haveReadId} name="haveRead" className="ml-auto" />
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
