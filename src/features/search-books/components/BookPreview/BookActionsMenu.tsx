"use client";

import * as A from "@/components/atomic";
import { useClickAway, useMenu } from "@/hooks";
import React, { useState } from "react";
import { getVolumeInUserLists } from "../../actions";
import type { BookActionsData } from "../../types";
import BookActionsForm from "./BookActionsForm";

export default function BookActionsMenu({ volumeId }: { volumeId: string }) {
  const contentId = `action-content-${volumeId}`;
  const containerId = `action-container-${volumeId}`;
  const buttonId = `action-btn-${volumeId}`;
  const [bookActionsData, setBookActionsData] = useState<BookActionsData>({});

  const { onClose, onKeyDown, onToggle, refs, isOpen } = useMenu<
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
        onClick={async () => {
          if (!isOpen) {
            const result = await getVolumeInUserLists(volumeId);
            setBookActionsData(result);
          }
          onToggle();
        }}
        ref={refs.activator}
        icon="/icons/list-icon.svg"
        size={"xs"}
      />
      {isOpen && bookActionsData.data && (
        <A.menu.Content
          id={contentId}
          aria-labelledby={buttonId}
          className="p-3 shadow-sm right-6 bottom-6 text-lg"
          role="dialog"
          aria-modal={isOpen}
        >
          <BookActionsForm
            volumeId={volumeId}
            dialog={{
              firstFocusRef: refs.firstFocus,
              lastFocusRef: refs.lastFocus,
              close: onClose,
            }}
            data={bookActionsData.data}
          />
        </A.menu.Content>
      )}
    </A.menu.Container>
  );
}
