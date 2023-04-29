import Link from "next/link";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const data = [
  {
    id: 0,
    icon: <BsFacebook />,
    link: "https://facebook.com",
  },

  {
    id: 0,
    icon: <BsTwitter />,
    link: "https://twitter.com",
  },

  {
    id: 0,
    icon: <BsLinkedin />,
    link: "https://linkedin.com",
  },
];
export default function SocialLinks() {
  const router = useRouter();
  return (
    <div className="inline-flex gap-x-6">
      {data.map(({ icon, link, id }) => (
        <Link href={link} target="_blank" key={id}>
          <p className="transition-smooth text-2xl hover:scale-110">{icon}</p>
        </Link>
      ))}
    </div>
  );
}
