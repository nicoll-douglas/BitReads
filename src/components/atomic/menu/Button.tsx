import IconButton, { IconButtonProps } from "../IconButton";
import React from "react";

interface ButtonProps extends Omit<IconButtonProps, "icon"> {
  id: string;
  onClick: () => unknown;
  "aria-label": string;
  "aria-controls": string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <IconButton
        icon="/icons/hamburger.svg"
        aria-haspopup="true"
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "menu.Button";

export default Button;
