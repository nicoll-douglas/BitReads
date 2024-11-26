"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface ItemProps extends React.HTMLProps<HTMLLIElement> {
  href: string;
}

export default function Item({
  href,
  children,
  className = "",
  ...rest
}: ItemProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li
      className={`relative border-b border-black flex -mb-[1px] px-4 py-2 ${
        active
          ? "border-x border-t-4 border-b-transparent bg-cyan-200 shadow-[6px_2px_0_-2px_rgba(0,0,0,0.3)] z-20"
          : "bg-cyan-300 mx-[1px] z-10"
      } ${className}`}
      {...rest}
    >
      <NextLink href={href}>{children}</NextLink>
    </li>
  );
}
