import classNames from "@/utils/className";
import Link from "next/link";

const data = [
  {
    id: 0,
    title: "Category",
    menuData: [
      {
        id: 0,
        title: "CSS",
        link: "/category/3",
      },
      {
        id: 1,
        title: "Javascript",
        link: "/category/4",
      },
      {
        id: 2,
        title: "Typescript",
        link: "/category/2",
      },
      {
        id: 3,
        title: "React js",
        link: "/category/5",
      },
      {
        id: 5,
        title: "More Categories",
        link: "/category/1",
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
        link: "https://www.linkedin.com/in/rajthapa7/",
      },
      {
        id: 1,
        title: "Twitter",
        link: "https://twitter.com/rajthapa_7",
      },
      {
        id: 2,
        title: "Facebook",
        link: "https://www.facebook.com/raj.thappa.3",
      },
      {
        id: 3,
        title: "Github",
        link: "https://www.github.com/rajthapa7/",
      },
    ],
  },
];

export default function FooterMenu({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-4"
      )}
    >
      {data.map(({ id: pid, title, menuData }) => (
        <div key={pid}>
          <p className="font-semibold uppercase text-gray-800 dark:text-gray-400 md:text-lg">
            {title}
          </p>
          <ul className="mt-4 flex flex-col gap-y-2">
            {menuData.map(({ id, title, link }) => (
              <li key={id} className="break-words">
                <Link
                  href={link}
                  {...(pid === 3 && {
                    target: "_blank",
                  })}
                  className="transition-smooth text-gray-800 hover:text-blue-800 dark:text-gray-500 dark:hover:text-blue-400 md:text-lg"
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
