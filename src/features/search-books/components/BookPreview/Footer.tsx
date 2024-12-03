import { gb } from "@/services";

export default function Footer({ volumeInfo }: gb.types.SearchVolume) {
  const { publisher, publishedDate } = volumeInfo;

  return (
    <div className="mt-auto">
      <div className="max-w-full w-full gap-1 flex text-lg leading-none items-center">
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
    </div>
  );
}
