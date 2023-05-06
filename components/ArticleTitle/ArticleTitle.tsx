interface IArticleTiltelProps {
  children: React.ReactNode;
}

export default function ArticleTitle({ children }: IArticleTiltelProps) {
  return (
    <p className="transition-smooth flex w-fit cursor-pointer items-center gap-x-1 text-xl font-semibold decoration-blue-600 underline-offset-4">
      {children}
    </p>
  );
}
