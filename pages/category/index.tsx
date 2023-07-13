import PageLayout from "@/layouts/PageLayout";
import Loader from "@/components/Loader/Loader";
import ArticleBlock, {
  ArticleCategoryBanner,
} from "@/features/articles/ArticleBlock";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";
import { useDarkMode } from "@/layouts/ThemeProvider";
import { useLoaded } from "@/hooks/useLoaded";

export default function Articles() {
  const categories = useFetchCategories();
  const router = useRouter();
  const darkmode = useDarkMode()?.darkMode;
  const loaded = useLoaded();
  return (
    <PageLayout className="space-y-10 dark:bg-gray-900 md:space-y-20">
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
              <ArticleBlock
                categoryId={id}
                className={loaded && darkmode ? "dark-shadow" : "shadow"}
              />
            </div>
          ))
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
}
