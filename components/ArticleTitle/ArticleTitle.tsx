import classNames from "@/utils/className";

interface IArticleTiltelProps {
  children: React.ReactNode;
  className?: string;
}

export default function ArticleTitle({
  children,
  className,
}: IArticleTiltelProps) {
  return (
    <p
      className={classNames(
        className,
        `transition-smooth flex w-fit cursor-pointer items-center gap-x-1 text-xl font-semibold decoration-blue-600 underline-offset-4 dark:text-gray-300`
      )}
    >
      {children}
    </p>
  );
}
