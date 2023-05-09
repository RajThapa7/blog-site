import classNames from "@/utils/className";

export default function BlogCardSkeletal({
  className,
}: {
  className?: string;
}) {
  const arr = Array.from(Array(5).keys());
  return (
    <div className={classNames(`flex gap-x-4 gap-y-12 pb-8 md:gap-x-8`)}>
      {arr.map((index: number) => {
        return (
          <div key={index} className="flex flex-col">
            <div className=" animate-shimmer mb-2 h-60 w-80 rounded-xl bg-gray-200 p-5 "></div>
            <div className="flex w-full items-center gap-x-4 pt-4">
              <div className="animate-shimmer h-12 w-16 rounded-full"></div>
              <div className="flex w-full flex-col">
                <p className="animate-shimmer mb-2 h-3 w-full rounded-full bg-gray-300"></p>
                <p className="animate-shimmer h-3 w-[calc(80%)] rounded-full bg-gray-300"></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
