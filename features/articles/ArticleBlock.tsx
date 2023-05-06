import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import BlogCard, { IBlogCardProps } from "@/components/BlogCard/BlogCard";
import TitleLink from "@/components/TitleLink/TitleLink";
import { ReactNode } from "react";
import { BsDashLg } from "react-icons/bs";

export interface ArticleDataProps {
  id: number;
  bannerTitle: string;
  blogCards: (IBlogCardProps & { id: number })[];
}

const ArticleBlock = ({ articleData }: { articleData: ArticleDataProps[] }) => (
  <>
    {articleData.map(({ id, bannerTitle, blogCards }) => (
      <div key={id}>
        <ArticleCategoryBanner>{bannerTitle}</ArticleCategoryBanner>
        <div className="relative">
          <div className="flex gap-x-4 overflow-x-scroll scroll-smooth py-10">
            {blogCards?.map(
              ({
                author,
                authorImg,
                blogTitleImg,
                date,
                readTime,
                title,
                id,
              }) => (
                <BlogCard
                  {...{
                    author,
                    authorImg,
                    blogTitleImg,
                    date,
                    readTime,
                    title,
                  }}
                  key={id}
                />
              )
            )}
          </div>
          <div className="absolute -right-4 top-0 h-full w-4 bg-white shadow"></div>
        </div>
      </div>
    ))}
  </>
);

interface IArticleCategoryBannerProps {
  children: ReactNode;
  link?: string;
}

const ArticleCategoryBanner = ({
  children,
  link = "#",
}: IArticleCategoryBannerProps) => (
  <div className="flex justify-between">
    <ArticleTitle>
      {children}
      <BsDashLg />
    </ArticleTitle>
    <TitleLink {...{ link }}>See All Article</TitleLink>
  </div>
);
export default ArticleBlock;
