import Image from "next/image";
import { gb } from "@/services";
import { Link } from "@/components/atomic";

export default function PreviewImageLink({
  selfLink,
  volumeInfo,
}: gb.types.SearchVolume) {
  const { imageLinks, title } = volumeInfo;

  return (
    <Link href={selfLink} className="relative w-14 h-20 min-w-14 min-h-20">
      <Image
        src={
          imageLinks?.smallThumbnail ||
          imageLinks?.thumbnail ||
          imageLinks?.small ||
          imageLinks?.medium ||
          imageLinks?.large ||
          imageLinks?.extraLarge ||
          "/broken-image.svg"
        }
        fill={true}
        alt={title}
        sizes="(min-width: 320px) 56px"
      />
    </Link>
  );
}
