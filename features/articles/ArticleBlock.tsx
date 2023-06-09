import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import BlogCard, { IBlogCardProps } from "@/components/BlogCard/BlogCard";
import TitleLink from "@/components/TitleLink/TitleLink";
import { ReactNode } from "react";
import { BsDashLg } from "react-icons/bs";
import useFetchArticleList from "./api/hooks/useFetchArticleList";
import classNames from "@/utils/className";
import BlogCardSkeletal from "@/components/Skeletal/BlogCardSkeletal";

export interface ArticleDataProps {
  id: number;
  bannerTitle: string;
  blogCards: (IBlogCardProps & { id: number })[];
}

export interface ArticleListType {
  id: number;
  date: string;
  slug: string;
  title: Title;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  categories: number[];
  tags: any[];
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Title {
  rendered: string;
}

const ArticleBlock = ({
  categoryId,
  className,
}: {
  categoryId: number | undefined;
  className?: string;
}) => {
  const articleData = useFetchArticleList(categoryId);

  return (
    <div className="relative">
      <div className="flex gap-x-4 overflow-x-scroll scroll-smooth py-10">
        {articleData ? (
          articleData.map(
            ({ excerpt, id, date, featured_media, title, author }) => (
              <BlogCard
                excerpt={excerpt}
                author={author}
                title={title}
                date={date}
                featured_media={featured_media}
                key={id}
                postId={id}
              />
            )
          )
        ) : (
          <BlogCardSkeletal />
        )}
      </div>
      <div
        className={classNames(
          className,
          `absolute -right-4 top-0 h-full w-4 bg-white dark:bg-gray-900`
        )}
      ></div>
    </div>
  );
};

interface IArticleCategoryBannerProps {
  children: ReactNode;
  link?: string;
}

export const ArticleCategoryBanner = ({
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
