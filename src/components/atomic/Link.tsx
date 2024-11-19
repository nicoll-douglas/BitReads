import NextLink from "next/link";
import React from "react";

interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
}

export default function Link({ children, ...rest }: LinkProps) {
  return (
    <NextLink className="hover:underline" {...rest}>
      {children}
    </NextLink>
  );
}
