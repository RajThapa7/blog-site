import PageLayout from "@/Layouts/PageLayout";
import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import Card, { ICardProps } from "@/components/Card/Card";
import TitleLink from "@/components/TitleLink/TitleLink";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import Image from "next/image";
import Programmer from "public/programmer.svg";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import CategoryCardSkeletal from "@/components/Skeletal/CategoryCardSkeletal";

const categoriesCardData: Omit<ICardProps, "id">[] = [
  {
    title: "CSS",
    icon: <DiCss3 />,
    hoverClass: "hover:bg-blue-400",
    iconClass: "text-blue-500",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript />,
    hoverClass: "hover:bg-[#f0db4f]",
    iconClass: "text-[#f0db4f]",
  },
  {
    title: "Typescript",
    icon: <SiTypescript />,
    hoverClass: "hover:bg-blue-500",
    iconClass: "text-blue-500",
  },
  {
    title: "React",
    icon: <FaReact />,
    hoverClass: "hover:bg-cyan-400",
    iconClass: "text-cyan-500",
  },
  {
    title: "Git",
    icon: <BsGit />,
    hoverClass: "hover:bg-orange-500",
    iconClass: "text-orange-500",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss />,
    hoverClass: "hover:bg-cyan-500",
    iconClass: "text-cyan-500",
  },
];

export default function Home() {
  const categories = useFetchCategories();

  const combinedCategoriesData =
    categories &&
    categoriesCardData?.map(({ title, icon, hoverClass, iconClass }) => {
      const id = categories?.find(
        (item) => title.toLowerCase() === item.name.toLowerCase()
      )?.id;
      return {
        title,
        hoverClass,
        iconClass,
        icon,
        ...(id ? { id } : { id: -1 }),
      };
    });

  return (
    <PageLayout className="bg-gray-50">
      <Intro />
      {combinedCategoriesData ? (
        <BrowseAllCategories data={combinedCategoriesData} />
      ) : (
        <CategoryCardSkeletal />
      )}
    </PageLayout>
  );
}

const BrowseAllCategories = ({ data }: { data: ICardProps[] }) => (
  <div>
    <div className="flex justify-between">
      <ArticleTitle>Browse the category </ArticleTitle>
      <TitleLink link="/category">See all categories</TitleLink>
    </div>
    <div className="grid grid-cols-2 place-items-center gap-y-10 py-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {data?.map(({ hoverClass, title, icon, id, iconClass }) => (
        <Card {...{ title, hoverClass, icon, iconClass, id }} key={id} />
      ))}
    </div>
  </div>
);

const Intro = () => (
  <div className="flex items-center py-12 pb-32 lg:pb-64">
    <div className="flex flex-grow basis-60 flex-col gap-y-8">
      <div className="flex flex-col gap-y-3 pb-4 text-4xl font-semibold text-gray-800 md:text-5xl">
        <p>Hi, I&apos;m Raj Thapa</p>
        <p>Front End Dev</p>
      </div>
      <div className="border-l-4 border-gray-600 pl-2">
        <p>
          On this blog, I share tips and tricks about different frameworks,
          projects, tutorials, and more.
        </p>
        <p>Make sure you subscribe to get the latest updates</p>
      </div>

      <div className="flex w-fit gap-x-4">
        <Input placeholder="Enter your email here..." />
        <Button>Subscribe</Button>
      </div>
    </div>

    <div className="hidden flex-grow basis-0 lg:flex">
      <Image alt="programmer" src={Programmer} />
    </div>
  </div>
);
