import PageLayout from "@/Layouts/PageLayout";
import BlogCardSkeletal from "@/components/Skeletal/BlogCardSkeletal";
import ArticleBlock, {
  ArticleCategoryBanner,
} from "@/features/articles/ArticleBlock";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";

export default function Articles() {
  const categories = useFetchCategories();
  const router = useRouter();
  return (
    <PageLayout className="space-y-10 md:space-y-20">
      {categories ? (
        categories
          ?.filter((category) => category.count > 0)
          ?.map(({ id, name }) => (
            <div key={id} className="">
              <ArticleCategoryBanner
                link={`${router.pathname}/${id.toString()}`}
              >
                {name}
              </ArticleCategoryBanner>
              <ArticleBlock categoryId={id} className="shadow" />
            </div>
          ))
      ) : (
        <BlogCardSkeletal />
      )}
    </PageLayout>
  );
}
