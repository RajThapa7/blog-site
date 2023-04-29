import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import BlogCard from "@/components/BlogCard/BlogCard";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import TitleLink from "@/components/TitleLink/TitleLink";
import css from "public/css.png";

const data = [
  {
    id: 0,
    title: "CSS",
    icon: css,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Button className="text-blue-700">subscribe</Button>
      {data?.map(({ title, icon, id }) => (
        <Card title={title} icon={icon} key={id} />
      ))}
      <ArticleTitle />
      <TitleLink />
      <BlogCard />
    </div>
  );
}
