"use client";

import NextLink from "next/link";
import Image, { ImageProps } from "next/image";
import { useTheme, Themes } from "@/features/theme";

interface WordmarkImageProps extends Omit<ImageProps, "src" | "alt"> {
  themeSync?: boolean;
  size?: "sm" | "md" | "lg";
}

const WordmarkImage = ({
  themeSync = true,
  size = "md",
  ...rest
}: WordmarkImageProps) => {
  const { theme } = useTheme();

  const classes = {
    sm: "h-8 w-[143px]",
    md: "h-9 w-[161px]",
    lg: "h-10 w-[179px]",
  };

  return (
    <Image
      src={`/wordmarks/wordmark-${themeSync ? theme : Themes.Default}.svg`}
      alt="BitReads"
      width={125}
      height={28}
      priority
      className={classes[size]}
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
