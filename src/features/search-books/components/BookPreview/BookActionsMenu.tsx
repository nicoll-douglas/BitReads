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

  // if (volumeId === "EvqJCGeqKhsC") {
  //   console.log(`PP1 menu is open: ${isOpen}`);
  // }

  // if (volumeId === "GjjZrQEACAAJ") {
  //   console.log(`PP2 menu is open: ${isOpen}`);
  // }

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
          offset="xs"
          className="mt-[4px] min-w-fit flex flex-col gap-1 shadow-sm"
        >
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              ref={refs.firstFocus}
              className="px-4"
              size="sm"
              rightIcon="/icons/watch-icon.svg"
            >
              Currently Reading
            </A.Button>
          </A.menu.Item>
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              className="px-4"
              size="sm"
              rightIcon="/icons/add-icon.svg"
            >
              Want to Read
            </A.Button>
          </A.menu.Item>
          <A.menu.Item>
            <A.Button
              onClick={onClose}
              className="px-4"
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
