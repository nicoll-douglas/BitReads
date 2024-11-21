import React from "react";

interface LabelProps extends React.HTMLProps<HTMLLabelElement> {
  htmlFor: string;
  required?: boolean;
}

export default function Label({
  required = false,
  className = "",
  children,
  ...rest
}: LabelProps) {
  return (
    <label className={`${className} mb-1`} {...rest}>
      {children} {required && <span className="text-red-500">*</span>}
    </label>
  );
}
