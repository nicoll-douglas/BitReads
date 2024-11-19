"use client";

import { Link } from "@/components/atomic";
import NextLink from "next/link";
import { useIsScrolled } from "@/hooks";

export default function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={`w-full py-4 gap-4 sticky top-0 z-50 ${
        isScrolled ? "border-black bg-cyan-200 border-b" : "bg-cyan-300"
      }`}
    >
      <div className="w-full max-w-container.xl mx-auto flex items-center px-8">
        <NextLink href="/">
          <div className="w-32 h-12 bg-red-300 text-center flex items-center justify-center">
            Logo
          </div>
        </NextLink>
        <nav className="flex gap-8 ml-auto">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Your Privacy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Register</Link>
        </nav>
      </div>
    </header>
  );
}
