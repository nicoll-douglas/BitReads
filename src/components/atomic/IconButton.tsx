import React from "react";
import Button, { ButtonProps } from "./Button";
import Image from "next/image";

export interface IconButtonProps extends ButtonProps {
  "aria-label": string;
  icon: {
    size?: number;
    src: string;
  };
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className = "", ...rest }, ref) => {
    const size = icon.size || 5;

    return (
      <Button
        className={`h-9 w-9 min-w-9 min-h-9 px-0 ${className}`}
        ref={ref}
        {...rest}
      >
        <Image
          alt=""
          src={icon.src}
          width={20}
          height={20}
          className={`h-${size} w-${size} min-w-${size} min-h-${size}`}
          style={{ height: `${4 * size}px`, width: `${4 * size}px` }}
        />
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
