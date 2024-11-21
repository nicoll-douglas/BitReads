import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      isLoading = false,
      isDisabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        className={`bg-cyan-400 h-10 border-b-black/40 border-t-cyan-400 border-l-cyan-400 border-r-black/40 border-2 flex items-center justify-center ${className} ${
          isLoading || isDisabled
            ? "cursor-not-allowed opacity-60"
            : "active:border-b-cyan-400 active:border-r-cyan-400 active:border-t-black/40 active:border-l-black/40"
        }`}
        ref={ref}
        {...rest}
        disabled={isLoading || isDisabled}
      >
        {isLoading ? (
          <div className="flex gap-2 justify-center items-center translate-y-[3px]">
            <div className="w-1 h-1 bg-black animate-loading-bounce"></div>
            <div
              className="w-1 h-1 bg-black animate-loading-bounce"
              style={{ animationDelay: "100ms" }}
            ></div>
            <div
              className="w-1 h-1 bg-black animate-loading-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
