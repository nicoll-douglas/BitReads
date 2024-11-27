"use client";

import { useClickAway, useMenu } from "@/hooks";
import * as A from "@/components/atomic";
import links from "../_data/links";

export default function MobileMenu() {
  const { onKeyDown, onClose, onToggle, isOpen, refs } =
    useMenu<HTMLAnchorElement>();
  useClickAway("#app-nav-container", onClose);

  return (
    <A.menu.Container
      className="lg:hidden"
      id="app-nav-container"
      onKeyDown={onKeyDown}
    >
      <A.menu.Button
        id="app-nav-btn"
        aria-label="App Navigation"
        aria-controls="app-nav-content"
        onClick={onToggle}
        ref={refs.activator}
        size={8}
      />
      {isOpen && (
        <A.menu.Content
          id="app-nav-content"
          aria-labelledby="app-nav-btn"
          margin={9}
        >
          {links.map(({ title, href }, index) => {
            return (
              <A.menu.Item key={index}>
                <A.Link
                  href={href}
                  onClick={onClose}
                  ref={
                    index === 0
                      ? refs.firstFocus
                      : index === links.length - 1
                      ? refs.lastFocus
                      : null
                  }
                >
                  {title}
                </A.Link>
              </A.menu.Item>
            );
          })}
        </A.menu.Content>
      )}
    </A.menu.Container>
  );
}
