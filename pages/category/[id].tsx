import PageLayout from "@/layouts/PageLayout";
import ArticleTitle from "@/components/ArticleTitle/ArticleTitle";
import BlogCard from "@/components/BlogCard/BlogCard";
import useFetchArticleList from "@/features/articles/api/hooks/useFetchArticleList";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";
import Loader from "@/components/Loader/Loader";

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
      {Number(categoryId) !== -1 ? (
        categoryName && articleList ? (
          <>
            <ArticleTitle className="flex w-full justify-center !text-2xl md:!text-3xl ">
              {categoryName}
            </ArticleTitle>
            <div className="mt-12 grid grid-cols-1 place-items-center items-start  gap-x-10 gap-y-20 overflow-x-hidden pb-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {articleList.map(
                ({ id, excerpt, featured_media, date, title, author }) => (
                  <BlogCard
                    key={id}
                    postId={id}
                    {...{ author, date, excerpt, featured_media, title }}
                  />
                )
              )}
            </div>
          </>
        ) : (
          <Loader />
        )
      ) : (
        <div className="flex w-full items-center justify-center text-xl font-semibold dark:text-gray-300">
          Currently, there are no articles under this category...
        </div>
      )}
    </PageLayout>
  );
}
