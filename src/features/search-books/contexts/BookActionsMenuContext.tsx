"use client";

import React, { createContext } from "react";
import { useMenu } from "@/hooks";

type BookActionsMenuContextType =
  | {
      onKeyDown: (e: React.KeyboardEvent) => void;
      isOpen: boolean;
      onOpen: () => void;
      onToggle: () => void;
      onClose: () => void;
      refs: {
        firstFocus: React.RefObject<HTMLInputElement>;
        lastFocus: React.RefObject<HTMLButtonElement>;
        activator: React.RefObject<HTMLButtonElement>;
      };
    }
  | undefined;

export const BookActionsMenuContext =
  createContext<BookActionsMenuContextType>(undefined);

export function BookActionsMenuProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const menu = useMenu<HTMLInputElement, HTMLButtonElement>();

  return (
    <BookActionsMenuContext.Provider value={menu}>
      {children}
    </BookActionsMenuContext.Provider>
  );
}
