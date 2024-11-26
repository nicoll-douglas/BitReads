import Image, { ImageProps } from "next/image";

export default function Logo(props: Omit<ImageProps, "src" | "alt">) {
  return <Image src={"/logo.svg"} alt="" width={32} height={28} {...props} />;
}
