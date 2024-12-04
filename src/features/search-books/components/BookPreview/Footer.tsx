import { gbooks } from "@/services";
import BookActionsBtn from "./BookActionsBtn";

export default function Footer({ volumeInfo }: gbooks.types.SearchVolume) {
  const { publisher, publishedDate } = volumeInfo;

  return (
    <div className="mt-auto flex gap-3">
      <div
        className="max-w-full w-full gap-1 flex text-lg leading-none items-end"
        style={{ width: "calc(100% - 24px - 12px)" }}
      >
        {publisher && (
          <p className={"w-1/2 inline no-overflow"} title={publisher}>
            {publisher}
          </p>
        )}
        {publisher && publishedDate && (
          <span className={`whitespace-pre-wrap inline`} aria-hidden="true">
            {"|"}
          </span>
        )}
        {publishedDate && (
          <p className={"w-1/2 inline no-overflow"}>{publishedDate}</p>
        )}
      </div>
      <BookActionsBtn />
    </div>
  );
}
