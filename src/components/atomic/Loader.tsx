/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";

interface LoaderInnateProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

function LoaderInnate({ className = "", size = "md" }: LoaderInnateProps) {
  const classes = {
    box: "bg-black animate-loading-bounce",
    gap: {
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-[10px]",
    },
    boxSize: {
      sm: "w-[3px] h-[3px]",
      md: "w-1 h-1",
      lg: "w-[6px] h-[6px]",
    },
  };

  return (
    <div
      className={`${classes.gap[size]} flex justify-center items-center translate-y-[3px] ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div className={`${classes.box} ${classes.boxSize[size]}`}></div>
      <div
        className={`${classes.box} ${classes.boxSize[size]}`}
        style={{ animationDelay: "100ms" }}
      ></div>
      <div
        className={`${classes.box} ${classes.boxSize[size]}`}
        style={{ animationDelay: "300ms" }}
      ></div>
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
