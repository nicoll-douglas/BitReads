/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

function LoaderInnate({ className = "" }: { className?: string }) {
  const classesA = `w-1 h-1 bg-black animate-loading-bounce`;

  return (
    <div
      className={`gap-2 flex justify-center items-center translate-y-[3px] ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className={classesA}></div>
      <div className={classesA} style={{ animationDelay: "100ms" }}></div>
      <div className={classesA} style={{ animationDelay: "300ms" }}></div>
    </div>
  );
}

export default function Loader({
  delay,
  className,
}: {
  delay?: number;
  className?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!delay) return;
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, []);

  if (!delay) return <LoaderInnate />;

  return show && <LoaderInnate className={className} />;
}
