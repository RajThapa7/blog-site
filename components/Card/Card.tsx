import { useRouter } from "next/router";

export interface ICardProps {
  id: number;
  title: string;
  icon: any;
  hoverClass: string;
  iconClass: string;
}

export default function Card({
  title,
  icon,
  hoverClass,
  iconClass,
  id,
}: ICardProps) {
  const router = useRouter();
  return (
    <div
      className={`transition-smooth group flex w-40 ${hoverClass} flex-col justify-center rounded-md bg-white px-3 py-12 pl-8  dark:bg-gray-800 md:w-48 md:py-16`}
      onClick={() => router.push(`/category/${id}`)}
    >
      <div
        className={`transition-smooth text-7xl ${iconClass} group-hover:text-white`}
      >
        {icon}
      </div>
      <p className="transition-smooth pt-8 text-xl font-semibold text-gray-600 group-hover:text-white dark:text-gray-400 md:text-2xl">
        {title}
      </p>
    </div>
  );
}
