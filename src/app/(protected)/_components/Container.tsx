/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={`flex-1 border border-black bg-cyan-200 shadow-sm p-4 sticky top-0 overflow-y-auto`}
      style={{ maxHeight: "calc(100dvh - 76px)" }}
    >
      {children}
    </main>
  );
}
