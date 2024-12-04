"use client";

import { Link } from "@/components/atomic";
import { useTheme } from "@/features/theme";
import { gbooks } from "@/services";

export default function Header({
  selfLink,
  volumeInfo,
}: gbooks.types.SearchVolume) {
  const { theme } = useTheme();
  const { authors, title } = volumeInfo;
  const authorString = authors?.join(", ") || "";

  return (
    <div className="w-full">
      <Link
        href={selfLink}
        className={`text-${theme}-950 leading-5 no-overflow`}
        title={title}
      >
        {title}
      </Link>
      <p className={`text-lg leading-none no-overflow`} title={authorString}>
        {authorString}
      </p>
    </div>
  );
}
