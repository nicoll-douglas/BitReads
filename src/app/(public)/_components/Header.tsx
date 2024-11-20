"use client";

import { useIsScrolled } from "@/hooks";
import MobileMenu from "./MobileMenu";
import { Wordmark } from "@/components/common";
import links from "../_data/links";
import Link from "next/link";

export default function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={`w-full py-4 gap-4 sticky top-0 z-40 ${
        isScrolled ? "border-black bg-cyan-300/90 border-b" : ""
      }`}
    >
      <div className="w-full max-w-container.xl mx-auto flex items-center px-4 lg:px-8 gap-8">
        <Wordmark />
        <nav className="hidden lg:block ml-auto">
          <ul className="flex gap-8">
            {links.map(({ title, href }, index) => (
              <Link href={href} key={index}>
                {title}
              </Link>
            ))}
          </ul>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
