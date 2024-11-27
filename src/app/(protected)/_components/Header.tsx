import { Wordmark } from "@/components/common";
import * as A from "@/components/atomic";
import { SignOutBtn } from "@/features/auth";
import { ChangeThemeBtn } from "@/features/theme";
import MobileMenu from "./MobileMenu";
import links from "../_data/links";

export default function Header() {
  return (
    <header className="flex justify-between w-full items-center mb-4 lg:mb-0">
      <div className="flex lg:hidden xl:flex">
        <Wordmark
          asLink="/dashboard"
          className="h-8 w-[142px]"
          defaultColor={false}
        />
      </div>
      <nav aria-label="App" className="hidden lg:flex">
        <A.tabs.List className="border-none max-w-fit">
          {links.map(({ href, title }, index) => (
            <A.tabs.Item href={href} key={index}>
              {title}
            </A.tabs.Item>
          ))}
        </A.tabs.List>
      </nav>
      <div className="flex gap-[6px]">
        <MobileMenu />
        <ChangeThemeBtn />
        <SignOutBtn className="h-8 max-h-8 text-lg" />
      </div>
    </header>
  );
}
