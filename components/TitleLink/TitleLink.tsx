import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";

interface ITitleProps {
  children: React.ReactNode;
  link: string;
}

export default function TitleLink({ children, link }: ITitleProps) {
  return (
    <Link
      href={link}
      className="transition-smooth flex w-fit items-center gap-x-2 text-xl font-semibold text-gray-800 decoration-blue-800 decoration-2 underline-offset-4 hover:text-blue-800 hover:underline dark:text-gray-300 dark:decoration-blue-400 dark:hover:text-blue-400"
    >
      {children}
      <AiOutlineRight />
    </Link>
  );
}
