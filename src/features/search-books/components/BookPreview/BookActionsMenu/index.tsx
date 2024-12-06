"use client";

import * as A from "@/components/atomic";
import BookActionsForm from "./BookActionsForm";
import { useMenu, useClickAway } from "@/hooks";

export default function BookActionsMenu({ volumeId }: { volumeId: string }) {
  const contentId = `action-content-${volumeId}`;
  const containerId = `action-container-${volumeId}`;
  const buttonId = `action-btn-${volumeId}`;

  const { onToggle, onKeyDown, isOpen, onClose, refs } = useMenu<
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
        icon="/icons/list-icon.svg"
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
          <BookActionsForm
            volumeId={volumeId}
            dialog={{
              firstFocusRef: refs.firstFocus,
              lastFocusRef: refs.lastFocus,
              close: onClose,
            }}
          />
        </A.menu.Content>
      )}
    </A.menu.Container>
  );
}
