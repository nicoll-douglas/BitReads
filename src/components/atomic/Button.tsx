"use client";

import React from "react";
import { useTheme, Themes } from "@/features/theme";
import Loader from "./Loader";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
  themeSync?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      isLoading = false,
      isDisabled = false,
      themeSync = true,
      size = "md",
      ...rest
    },
    ref
  ) => {
    let { theme } = useTheme();

    theme = themeSync ? theme : Themes.Default;

    const classes = {
      default:
        "border-b-black/50 border-r-black/50 border-2 flex items-center justify-center text-nowrap",
      themed: `bg-${theme}-400 border-t-${theme}-400 border-l-${theme}-400`,
      loadingOrDisabled: "cursor-not-allowed opacity-60",
      active: `active:border-b-${theme}-400 active:border-r-${theme}-400 active:border-t-black/50 active:border-l-black/50`,
      sizes: {
        xs: "h-6 text-base",
        sm: "h-8 text-lg",
        md: "h-9 text-xl",
        lg: "h-10 text-xl",
      },
    };

    return (
      <button
        className={`${classes.default} ${classes.themed} ${
          classes.sizes[size]
        } ${
          isLoading || isDisabled ? classes.loadingOrDisabled : classes.active
        } ${className}`}
        ref={ref}
        disabled={isLoading || isDisabled}
        type="button"
        {...rest}
      >
        {isLoading ? <Loader /> : children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
