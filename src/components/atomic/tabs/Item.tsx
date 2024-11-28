"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/features/theme";

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
  const { theme } = useTheme();

  return (
    <li
      className={`relative border-b border-t-4 border-black flex -mb-[1px] px-4 py-2 ${
        active
          ? `border-x border-b-transparent bg-${theme}-200 shadow-[6px_2px_0_-2px_rgba(0,0,0,0.3)] z-20`
          : `bg-${theme}-300 mx-[1px] z-10 border-t-transparent`
      } ${className}`}
      {...rest}
    >
      <NextLink href={href}>{children}</NextLink>
    </li>
  );
}
