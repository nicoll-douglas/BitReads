import { Card } from "@/components/atomic";
import PreviewImageLink from "./PreviewImageLink";
import Header from "./Header";
import Footer from "./Footer";
import { gbooks } from "@/services";

interface BookPreviewProps extends gbooks.types.SearchVolume {
  index: number;
}

export default function BookPreview({ index, ...volume }: BookPreviewProps) {
  return (
    <Card className="shadow-sm max-w-full w-full">
      <li className="flex p-3 gap-3" aria-label={`Result ${index + 1}`}>
        <PreviewImageLink {...volume} />
        <div
          className="flex flex-col"
          style={{ width: "calc(100% - 56px - 12px)" }}
        >
          <Header {...volume} />
          <Footer {...volume} />
        </div>
      </li>
    </Card>
  );
}
