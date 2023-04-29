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
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
      ],
    },
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
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
      ],
    },
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
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
        {
          id: 0,
          title: "CSS",
          link: "/css",
        },
      ],
    },
  ];

  return (
    <div className={classNames(className, "flex gap-x-20")}>
      {data.map(({ id, title, menuData }) => (
        <div key={id}>
          <p className="text-xl font-bold uppercase text-gray-800">{title}</p>
          <ul className="mt-4 flex flex-col gap-y-2">
            {menuData.map(({ id, title, link }) => (
              <li>
                <Link
                  href={link}
                  className="transition-smooth text-lg font-semibold text-gray-500 hover:text-blue-500"
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
