"use client";

import React, { useEffect, useMemo } from "react";

export default function Item({ children }: { children: React.ReactNode }) {
  const id = useMemo(() => `id-${crypto.randomUUID()}`, []);

  useEffect(() => {
    const child = document.querySelector(`#${id} > :first-child`);
    if (!child) return;
    child.setAttribute("role", "menuitem");
  }, [id]);

  return (
    <li role="presentation" id={id} className="flex">
      {children}
    </li>
  );
}
