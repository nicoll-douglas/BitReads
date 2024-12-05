import React, { useCallback } from "react";
import useDisclosure from "./useDisclosure";

export default function useMenu<T extends HTMLElement>() {
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();

  const activator = React.useRef<HTMLButtonElement>(null);
  const firstFocus = React.useRef<T>(null);
  const lastFocus = React.useRef<T>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    firstFocus.current?.focus();
  }, [isOpen, firstFocus]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const { key } = e;

      if (key === "Escape") {
        e.preventDefault();
        onClose();
        activator.current?.focus();
        return;
      }

      if (key === "Tab") {
        if (e.shiftKey && document.activeElement === firstFocus.current) {
          e.preventDefault();
          lastFocus.current?.focus();
        } else if (
          !e.shiftKey &&
          document.activeElement === lastFocus.current
        ) {
          e.preventDefault();
          firstFocus.current?.focus();
        }
      }
    },
    [onClose]
  );

  return {
    onKeyDown,
    isOpen,
    onOpen,
    onToggle,
    onClose,
    refs: {
      firstFocus,
      lastFocus,
      activator,
    },
  };
}
