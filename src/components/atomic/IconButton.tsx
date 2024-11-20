import React from "react";
import Button from "./Button";
import Image from "next/image";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  icon: {
    size?: number;
    src: string;
  };
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ...rest }, ref) => {
    const size = icon.size || 5;

    return (
      <Button className="h-9 w-9 min-w-9 min-h-9 px-0" ref={ref} {...rest}>
        <Image
          alt=""
          src={icon.src}
          width={20}
          height={20}
          className={`h-${size} w-${size} min-w-${size} min-h-${size}`}
        />
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
