import Link from "next/link";

interface ISocialProps {
  id: number;
  icon: any;
  link: string;
}

export default function SocialLinks({ data }: { data: ISocialProps[] }) {
  return (
    <div className="inline-flex gap-x-6">
      {data.map(({ icon, link, id }) =>
        id === -1 ? (
          <p className="text-2xl dark:text-gray-400" key={id}>
            {icon}
          </p>
        ) : (
          <Link href={link} target="_blank" key={id}>
            <p className="transition-smooth text-2xl hover:scale-110 dark:text-gray-400">
              {icon}
            </p>
          </Link>
        )
      )}
    </div>
  );
}
