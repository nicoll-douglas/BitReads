import { Wordmark } from "@/components/common";
import * as A from "@/components/atomic";
import { SignOutBtn } from "@/features/auth";

export default function Header() {
  return (
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
  );
}
