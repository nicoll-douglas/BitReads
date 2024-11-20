import * as A from "@/components/atomic";
import Image from "next/image";
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
      <A.Button
        className="h-9 w-9 flex items-center justify-center px-0"
        aria-haspopup="true"
        ref={ref}
        {...props}
      >
        <Image
          src={"/icons/hamburger.svg"}
          alt=""
          aria-hidden="true"
          width={20}
          height={20}
        />
      </A.Button>
    );
  }
);

Button.displayName = "menu.Button";

export default Button;
