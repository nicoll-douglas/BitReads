import React from "react";

interface DividerProps extends React.HTMLProps<HTMLHRElement> {
  centerText?: string;
  centerBg?: string;
}

export default function Divider({
  centerText,
  centerBg = "",
  className = "",
  ...rest
}: DividerProps) {
  if (centerText) {
    return (
      <div
        className={`relative flex items-center justify-center h-6 ${className}`}
      >
        <span className={`absolute ${centerBg} px-2`}>{centerText}</span>
        <hr className="border-black opacity-100 w-full" {...rest} />
      </div>
    );
  }

  return (
    <hr className={`border-black w-full opacity-100 ${className}`} {...rest} />
  );
}
