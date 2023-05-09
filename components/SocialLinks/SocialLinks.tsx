import Link from "next/link";
import { useRouter } from "next/router";

interface ISocialProps {
  id: number;
  icon: any;
  link: string;
}

export default function SocialLinks({ data }: { data: ISocialProps[] }) {
  const router = useRouter();
  return (
    <div className="inline-flex gap-x-6">
      {data.map(({ icon, link, id }) =>
        id === -1 ? (
          <p className="text-2xl" key={id}>
            {icon}
          </p>
        ) : (
          <Link href={link} target="_blank" key={id}>
            <p className="transition-smooth text-2xl hover:scale-110">{icon}</p>
          </Link>
        )
      )}
    </div>
  );
}
