import React from "react";

export default function List({
  className = "",
  children,
  ...rest
}: React.HTMLProps<HTMLUListElement>) {
  return (
    <ul
      className={`border-b-black border-b flex justify-center items-end ${className}`}
      {...rest}
    >
      {children}
    </ul>
  );
}
