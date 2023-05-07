import MainLayout from "@/Layouts/MainLayout";
import PageLayout from "@/Layouts/PageLayout";
import ArticleBlock, {
  ArticleCategoryBanner,
} from "@/features/articles/ArticleBlock";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";

export default function Articles() {
  const categories = useFetchCategories();
  console.log(categories, "categories");
  return (
    <MainLayout>
      <PageLayout className="space-y-10 md:space-y-20">
        {categories &&
          categories
            ?.filter((category) => category.count > 0)
            ?.map(({ id, name }) => (
              <div key={id} className="">
                <ArticleCategoryBanner>{name}</ArticleCategoryBanner>
                <ArticleBlock categoryId={id} />
              </div>
            ))}
      </PageLayout>
    </MainLayout>
  );
}
