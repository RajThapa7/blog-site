import Navbar from "@/components/Navbar/Navbar";
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
    <div className="min-h-screen bg-gray-200">
      {/* <Button className="text-blue-700">subscribe</Button>
      {data?.map(({ title, icon, id }) => (
        <Card title={title} icon={icon} key={id} />
      ))}
      <ArticleTitle />
      <TitleLink />
      <BlogCard /> */}
      <Navbar />
      {/* <Subscribe />
      <Footer /> */}
    </div>
  );
}
