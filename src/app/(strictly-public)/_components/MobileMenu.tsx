"use client";

import { useClickAway, useMenu } from "@/hooks";
import * as A from "@/components/atomic";
import links from "../_data/links";

export default function MobileMenu() {
  const { onKeyDown, onClose, onToggle, isOpen, refs } =
    useMenu<HTMLAnchorElement>();
  useClickAway("#site-nav-container", onClose);

  return (
    <A.menu.Container
      className="ml-auto lg:hidden"
      id="site-nav-container"
      onKeyDown={onKeyDown}
    >
      <A.menu.Button
        id="site-nav-btn"
        aria-label="Site Navigation"
        aria-controls="site-nav-content"
        onClick={onToggle}
        ref={refs.activator}
      />
      {isOpen && (
        <A.menu.Content id="site-nav-content" aria-labelledby="site-nav-btn">
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
