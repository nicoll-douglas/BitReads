import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className = "", ...rest }, ref) => {
  return (
    <button
      className={`bg-cyan-400 px-4 h-10 border-b-black/40 border-t-cyan-400 border-l-cyan-400 border-r-black/40 border-2 
          active:border-b-cyan-400 active:border-r-cyan-400 active:border-t-black/40 active:border-l-black/40 ${className}`}
      ref={ref}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
