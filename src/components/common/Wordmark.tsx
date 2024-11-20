import NextLink from "next/link";
import Image, { ImageProps } from "next/image";

type WordmarkImageProps = Omit<ImageProps, "src" | "alt">;

const WordmarkImage = (props: WordmarkImageProps) => (
  <Image
    src={"/wordmark.svg"}
    alt="BitReads"
    width={160}
    height={32}
    priority
    className="h-9 w-40 min-h-9 min-w-40"
    {...props}
  />
);

interface WordmarkProps extends WordmarkImageProps {
  asLink?: boolean;
}

export default function Wordmark({ asLink = true, ...rest }: WordmarkProps) {
  if (asLink) {
    return (
      <NextLink href="/" className="w-fit h-fit max-h-fit max-w-fit">
        <WordmarkImage {...rest} />
      </NextLink>
    );
  }

  return <WordmarkImage {...rest} />;
}
