import MainLayout from "@/Layouts/MainLayout";
import PageLayout from "@/Layouts/PageLayout";
import ArticleBlock, {
  ArticleDataProps,
} from "@/features/articles/ArticleBlock";
import raj from "public/pro.jpeg";
import blogImg from "public/wallpaper.jpg";

export default function Articles() {
  return (
    <MainLayout>
      <PageLayout className="space-y-10">
        <ArticleBlock articleData={articleData} />
      </PageLayout>
    </MainLayout>
  );
}

const articleData: ArticleDataProps[] = [
  {
    blogCards: [
      {
        title: "How to use Javascript like a pro",
        author: "Raj Thapa",
        date: "2021-09-10",
        authorImg: raj,
        blogTitleImg: blogImg,
        readTime: 20,
        id: 0,
      },
      {
        title: "How to use Javascript like a pro",
        author: "Raj Thapa",
        date: "2021-09-10",
        authorImg: raj,
        blogTitleImg: blogImg,
        readTime: 20,
        id: 1,
      },
      {
        title: "How to use Javascript like a pro",
        author: "Raj Thapa",
        date: "2021-09-10",
        authorImg: raj,
        blogTitleImg: blogImg,
        readTime: 20,
        id: 2,
      },
    ],
    bannerTitle: "CSS",
    id: 0,
  },
  {
    blogCards: [
      {
        title: "How to use Javascript like a pro",
        author: "Raj Thapa",
        date: "2021-09-10",
        authorImg: raj,
        blogTitleImg: blogImg,
        readTime: 20,
        id: 0,
      },
    ],
    bannerTitle: "JS",
    id: 1,
  },
];
