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
  return (
    <div
      key={id}
      className={`transition-smooth group flex w-40 ${hoverClass} flex-col justify-center rounded-md bg-white px-3 py-12 pl-8 md:w-48 md:py-16`}
    >
      <div
        className={`transition-smooth text-7xl ${iconClass} group-hover:text-white`}
      >
        {icon}
      </div>
      <p className="transition-smooth pt-8 text-xl font-semibold text-gray-600 group-hover:text-white md:text-2xl">
        {title}
      </p>
    </div>
  );
}
