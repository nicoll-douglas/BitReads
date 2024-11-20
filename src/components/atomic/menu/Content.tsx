import React from "react";

interface ContainerProps extends React.HTMLProps<HTMLUListElement> {
  id: string;
  "aria-labelledby": string;
}

export default function Content({
  className = "",
  children,
  ...rest
}: ContainerProps) {
  return (
    <ul
      role="menu"
      className={`flex flex-col absolute top-0 right-0 bg-cyan-200 p-2 w-52 border border-black z-50 shadow-lg mt-11 ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}
