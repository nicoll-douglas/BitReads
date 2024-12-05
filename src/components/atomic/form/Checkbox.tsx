import React from "react";

const CheckBox = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement>
>(({ className = "", ...rest }, ref) => {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={`appearance-none ${className} bg-white w-5 h-5 border-2 cursor-pointer border-black grid place-content-center relative`}
      {...rest}
    />
  );
});

CheckBox.displayName = "Checkbox";

export default CheckBox;
