"use client";

import { useClickAway, useMenu } from "@/hooks";
import * as A from "@/components/atomic";

export default function BookActionsMenu({ volumeId }: { volumeId: string }) {
  const contentId = `action-content-${volumeId}`;
  const containerId = `action-container-${volumeId}`;
  const buttonId = `action-btn-${volumeId}`;

  const { onKeyDown, onClose, onToggle, isOpen, refs } =
    useMenu<HTMLButtonElement>();
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
          className="w-60 gap-1 shadow-sm right-6 bottom-6"
        >
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              ref={refs.firstFocus}
              className="px-4 flex-1 min-w-fit"
              size="sm"
              rightIcon="/icons/watch-icon.svg"
            >
              Currently Reading
            </A.Button>
          </A.menu.Item>
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              className="px-4 flex-1 min-w-fit"
              size="sm"
              rightIcon="/icons/add-icon.svg"
            >
              Want to Read
            </A.Button>
          </A.menu.Item>
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              className="px-4 flex-1 min-w-fit"
              size="sm"
              ref={refs.lastFocus}
              rightIcon="/icons/tick.svg"
            >
              Have Read
            </A.Button>
          </A.menu.Item>
        </A.menu.Content>
      )}
    </A.menu.Container>
  );
}
