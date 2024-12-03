import React from "react";
import Button, { ButtonProps } from "./Button";
import Image from "next/image";

export interface IconButtonProps extends ButtonProps {
  "aria-label": string;
  icon: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className = "", size = "md", ...rest }, ref) => {
    const sizes = {
      xs: {
        btn: "w-6 min-w-6 min-h-6",
        icon: "w-3 h-3",
      },
      sm: {
        btn: "w-8 min-w-8 min-h-8",
        icon: "w-5 h-5",
      },
      md: {
        btn: "w-9 min-w-9 min-h-9",
        icon: "w-5 h-5",
      },
      lg: {
        btn: "w-10 min-w-10 min-h-10",
        icon: "w-6 h-6",
      },
    };

    return (
      <Button
        className={`${sizes[size].btn} ${className}`}
        size={size}
        ref={ref}
        {...rest}
      >
        <Image
          alt=""
          src={icon}
          width={20}
          height={20}
          className={sizes[size].icon}
        />
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
