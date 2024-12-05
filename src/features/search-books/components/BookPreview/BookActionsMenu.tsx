"use client";

import { useClickAway, useMenu } from "@/hooks";
import * as A from "@/components/atomic";

export default function BookActionsMenu({ volumeId }: { volumeId: string }) {
  const contentId = `action-content-${volumeId}`;
  const containerId = `action-container-${volumeId}`;
  const buttonId = `action-btn-${volumeId}`;
  const currentlyReadingId = `cr-${volumeId}`;
  const wantToReadId = `wtr-${volumeId}`;
  const haveReadId = `hr-${volumeId}`;

  const { onKeyDown, onClose, onToggle, isOpen, refs } = useMenu<
    HTMLInputElement,
    HTMLButtonElement
  >();
  useClickAway(`#${containerId}`, onClose);

  return (
    <A.menu.Container id={containerId} onKeyDown={onKeyDown}>
      <A.menu.Button
        id={buttonId}
        aria-label="Book Actions"
        aria-controls={contentId}
        onClick={onToggle}
        ref={refs.activator}
        icon="/icons/add-icon.svg"
        size={"xs"}
      />
      {isOpen && (
        <A.menu.Content
          id={contentId}
          aria-labelledby={buttonId}
          className="p-3 shadow-sm right-6 bottom-6 text-lg"
          role="dialog"
          aria-modal={isOpen}
        >
          <form className="flex gap-2 flex-col w-full">
            <div className="flex gap-3 items-center">
              <A.form.Label
                htmlFor={currentlyReadingId}
                className="mb-0 text-nowrap"
              >
                Currently Reading
              </A.form.Label>
              <A.form.Checkbox
                id={currentlyReadingId}
                name="currentlyReading"
                className="ml-auto"
                ref={refs.firstFocus}
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
              <A.form.Checkbox
                id={haveReadId}
                name="haveRead"
                className="ml-auto"
              />
            </div>
            <A.Button
              size="sm"
              type="submit"
              ref={refs.lastFocus}
              onClick={onClose}
            >
              Save
            </A.Button>
          </form>
        </A.menu.Content>
      )}
    </A.menu.Container>
  );
}
