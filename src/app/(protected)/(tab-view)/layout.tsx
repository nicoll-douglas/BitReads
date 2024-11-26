import React from "react";
import * as A from "@/components/atomic";
import { Wordmark } from "@/components/common";
import { SignOutBtn } from "@/features/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 flex flex-col min-h-dvh">
      <header className="flex justify-between w-full items-center">
        <Wordmark asLink="/dashboard" className="h-8 w-[142px]" />
        <nav aria-label="App">
          <A.tabs.List className="border-none max-w-fit">
            <A.tabs.Item href="/dashboard">Dashboard</A.tabs.Item>
            <A.tabs.Item href="/shelves">Shelves</A.tabs.Item>
            <A.tabs.Item href="/profile">Profile</A.tabs.Item>
            <A.tabs.Item href="/social">Social</A.tabs.Item>
            <A.tabs.Item href="/explore">Explore</A.tabs.Item>
            <A.tabs.Item href="/settings">Settings</A.tabs.Item>
          </A.tabs.List>
        </nav>
        <SignOutBtn className="h-8 max-h-8 text-lg" />
      </header>
      <main
        className="flex-1 border border-black bg-cyan-200 shadow-sm p-4 sticky top-0 overflow-y-auto"
        style={{ maxHeight: "calc(100dvh - 76px)" }}
      >
        <div style={{ minHeight: "200dvh" }}>bing bong hello</div>
        {children}
      </main>
    </div>
  );
}
