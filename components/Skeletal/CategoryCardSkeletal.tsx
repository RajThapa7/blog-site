import { useDarkMode } from "@/layouts/ThemeProvider";
import classNames from "@/utils/className";

export default function CategoryCardSkeletal({
  className,
}: {
  className?: string;
}) {
  const arr = Array.from(Array(6).keys());
  const darkMode = useDarkMode()?.darkMode;
  return (
    <div
      className={classNames(
        `grid grid-cols-2 place-items-center gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6`
      )}
    >
      {arr.map((index: number) => {
        return (
          <div
            key={index}
            className={`${
              darkMode ? "dark-animate-shimmer" : "animate-shimmer"
            } mb-2 h-48 w-40 rounded-xl bg-gray-200 p-5 lg:h-60 lg:w-52`}
          ></div>
        );
      })}
    </div>
  );
}
