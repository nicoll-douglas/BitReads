import IconButton, { IconButtonProps } from "../IconButton";
import React from "react";

interface ButtonProps extends IconButtonProps {
  id: string;
  onClick: () => unknown;
  "aria-label": string;
  "aria-controls": string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon = "/icons/hamburger.svg", ...rest }, ref) => {
    return <IconButton icon={icon} aria-haspopup="true" ref={ref} {...rest} />;
  }
);

Button.displayName = "menu.Button";

export default Button;
