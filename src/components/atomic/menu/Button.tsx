import { IconButton } from "@/components/atomic";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  onClick: () => unknown;
  "aria-label": string;
  "aria-controls": string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <IconButton
        icon={{ src: "/icons/hamburger.svg" }}
        aria-haspopup="true"
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "menu.Button";

export default Button;
