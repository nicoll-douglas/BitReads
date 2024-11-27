"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";
import Loader from "./Loader";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  defaultColor?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      isLoading = false,
      isDisabled = false,
      defaultColor = false,
      ...rest
    },
    ref
  ) => {
    let { theme } = useTheme();
    theme = defaultColor ? Themes.Default : theme;

    return (
      <button
        className={`bg-${theme}-400 h-10 border-b-black/50 border-t-${theme}-400 border-l-${theme}-400 border-r-black/50 border-2 flex items-center justify-center ${className} ${
          isLoading || isDisabled
            ? "cursor-not-allowed opacity-60"
            : `active:border-b-${theme}-400 active:border-r-${theme}-400 active:border-t-black/50 active:border-l-black/50`
        }`}
        ref={ref}
        {...rest}
        disabled={isLoading || isDisabled}
      >
        {isLoading ? <Loader /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
