import React from "react";

export default function HelperText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ul className="text-lg flex flex-col gap-1 leading-5 mt-2 list-decimal list-inside">
      {children}
    </ul>
  );
}
