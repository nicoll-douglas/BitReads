/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

interface LoaderInnateProps {
  className?: string;
  gap?: "sm" | "md" | "lg";
}

function LoaderInnate({ className = "", gap = "md" }: LoaderInnateProps) {
  const classesA = `w-1 h-1 bg-black animate-loading-bounce`;
  const gapClass = {
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-3",
  };

  return (
    <div
      className={`${gapClass[gap]} flex justify-center items-center translate-y-[3px] ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className={classesA}></div>
      <div className={classesA} style={{ animationDelay: "100ms" }}></div>
      <div className={classesA} style={{ animationDelay: "300ms" }}></div>
    </div>
  );
}

interface LoaderProps extends LoaderInnateProps {
  delay?: number;
}

export default function Loader({ delay, ...rest }: LoaderProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!delay) return;
    const timeout = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timeout);
  }, []);

  if (!delay) return <LoaderInnate {...rest} />;

  return show && <LoaderInnate {...rest} />;
}
