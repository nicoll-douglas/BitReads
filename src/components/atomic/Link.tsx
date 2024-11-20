import NextLink from "next/link";
import React from "react";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <NextLink ref={ref} className={`hover:underline ${className}`} {...rest}>
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";

export default Link;
