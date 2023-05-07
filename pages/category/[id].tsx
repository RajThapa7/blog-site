import PageLayout from "@/Layouts/PageLayout";
import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import BlogCard from "@/components/BlogCard/BlogCard";
import useFetchArticleList from "@/features/articles/api/hooks/useFetchArticleList";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const categoryId = router.query.id as string;
  const categories = useFetchCategories();

  const categoryName = categories?.find(
    (category) => category.id === Number(categoryId)
  )?.name;

  const articleList = useFetchArticleList(categoryId);

  return (
    <PageLayout className="pb-24">
      <ArticleTitle className="pl-10 !text-2xl">{categoryName}</ArticleTitle>
      <div className="mt-10 grid grid-cols-1 place-items-center gap-x-10  gap-y-10 overflow-x-hidden md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 ">
        {articleList?.map(
          ({ id, excerpt, featured_media, date, title, author }) => (
            <BlogCard
              key={id}
              postId={id}
              {...{ author, date, excerpt, featured_media, title }}
            />
          )
        )}
      </div>
    </PageLayout>
  );
}
