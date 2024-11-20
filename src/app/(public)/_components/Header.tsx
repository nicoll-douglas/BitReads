"use client";

import { Link } from "@/components/atomic";
import NextLink from "next/link";
import Image from "next/image";
import Image from "next/image";
import { useIsScrolled } from "@/hooks";

export default function Header() {
  const isScrolled = useIsScrolled();

  return (
    <header
      className={`w-full py-4 gap-4 sticky top-0 z-50 ${
        isScrolled ? "border-black bg-cyan-300/90 border-b" : ""
      }`}
    >
      <div className="w-full max-w-container.xl mx-auto flex items-center px-8">
        <NextLink href="/">
          <Image
            src={"/logo.svg"}
            alt="BitReads"
            width={160}
            height={32}
            priority
            className="h-9 w-40"
          />
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
