import classNames from "@/utils/className";
import Link from "next/link";

export default function FooterMenu({ className }: { className?: string }) {
  const data = [
    {
      id: 0,
      title: "Category",
      menuData: [
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 1,
          title: "Javascript",
          link: "/css",
        },
        {
          id: 2,
          title: "Typescript",
          link: "/css",
        },
        {
          id: 3,
          title: "React js",
          link: "/css",
        },
        {
          id: 5,
          title: "More Categories",
          link: "/css",
        },
      ],
    },
    {
      id: 1,
      title: "About Me",
      menuData: [
        {
          id: 0,
          title: "About Me",
          link: "/css",
        },
        {
          id: 1,
          title: "Projects",
          link: "/css",
        },
        {
          id: 2,
          title: "Achievements",
          link: "/css",
        },
      ],
    },
    {
      id: 2,
      title: "Get in Touch",
      menuData: [
        {
          id: 0,
          title: "connect@rajthapa7.com.np",
          link: "/css",
        },
        {
          id: 1,
          title: "+977 9848741130",
          link: "/css",
        },
      ],
    },
    {
      id: 3,
      title: "Follow Me",
      menuData: [
        {
          id: 0,
          title: "LinkedIn",
          link: "/css",
        },
        {
          id: 1,
          title: "Twitter",
          link: "/css",
        },
        {
          id: 2,
          title: "Facebook",
          link: "/css",
        },
        {
          id: 3,
          title: "Github",
          link: "/css",
        },
      ],
    },
  ];

  return (
    <div
      className={classNames(
        className,
        "grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4"
      )}
    >
      {data.map(({ id, title, menuData }) => (
        <div key={id}>
          <p className="font-semibold uppercase text-gray-800 md:text-lg">
            {title}
          </p>
          <ul className="mt-4 flex flex-col gap-y-2">
            {menuData.map(({ id, title, link }) => (
              <li key={id} className="break-words">
                <Link
                  href={link}
                  className="transition-smooth text-gray-800 hover:text-blue-800 md:text-lg"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
