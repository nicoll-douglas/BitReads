"use client";

import NextLink from "next/link";
import Image, { ImageProps } from "next/image";
import { useTheme, Themes } from "@/features/theme";

interface WordmarkImageProps extends Omit<ImageProps, "src" | "alt"> {
  defaultColor?: boolean;
}

const WordmarkImage = ({
  defaultColor = true,
  ...rest
}: WordmarkImageProps) => {
  const { theme } = useTheme();

  return (
    <Image
      src={`/wordmarks/wordmark-${defaultColor ? Themes.Default : theme}.svg`}
      alt="BitReads"
      width={160}
      height={32}
      priority
      className="h-9 w-40 min-h-9 min-w-40"
      {...rest}
    />
  );
};

interface WordmarkProps extends WordmarkImageProps {
  asLink?: string;
}

export default function Wordmark({ asLink, ...rest }: WordmarkProps) {
  if (asLink) {
    return (
      <NextLink href={asLink} className="w-fit h-fit max-h-fit max-w-fit">
        <WordmarkImage {...rest} />
      </NextLink>
    );
  }

  return <WordmarkImage {...rest} />;
}
