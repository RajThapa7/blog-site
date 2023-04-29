import Image, { StaticImageData } from "next/image";

interface ICardProps {
  title: string;
  icon: StaticImageData;
}

export default function Card({ title, icon }: ICardProps) {
  return (
    <div className="transition-smooth group flex w-48 flex-col justify-center rounded-md bg-white px-3 py-16 pl-8 hover:bg-blue-400">
      <div className="h-16 w-16">
        <Image src={icon} alt="icon" className="object-contain" />
      </div>
      <p className="transition-smooth pt-8 text-2xl font-bold group-hover:text-white">
        {title}
      </p>
    </div>
  );
}
