import React from "react";
import Button, { ButtonProps } from "./Button";
import Image from "next/image";

export interface IconButtonProps extends ButtonProps {
  "aria-label": string;
  icon: {
    size?: number;
    src: string;
  };
  size?: number;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className = "", size = 9, ...rest }, ref) => {
    const iconSize = icon.size || 5;

    return (
      <Button
        className={`h-${size} w-${size} min-w-${size} min-h-${size} px-0 ${className}`}
        ref={ref}
        {...rest}
      >
        <Image
          alt=""
          src={icon.src}
          width={20}
          height={20}
          className={`h-${iconSize} w-${iconSize} min-w-${iconSize} min-h-${iconSize}`}
          style={{ height: `${4 * iconSize}px`, width: `${4 * iconSize}px` }}
        />
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
