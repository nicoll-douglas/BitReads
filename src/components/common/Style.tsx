"use client";

import React from "react";

export default function Style({ children }: { children?: string }) {
  return (
    <style global jsx>
      {children}
    </style>
  );
}
