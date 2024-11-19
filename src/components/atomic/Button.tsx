import React from "react";

export default function Button({
  children,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-cyan-400 px-4 h-10 border-b-black/40 border-t-cyan-400 border-l-cyan-400 border-r-black/40 border-2 
        active:border-b-cyan-400 active:border-r-cyan-400 active:border-t-black/40 active:border-l-black/40 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
