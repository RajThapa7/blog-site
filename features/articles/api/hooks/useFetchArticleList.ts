import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { ArticleListType } from "../../ArticleBlock";

const getArticleList = async (
  api: AxiosInstance,
  categoryId: number | string | undefined
): Promise<ArticleListType[]> => {
  const result = await api.get("", {
    params: {
      _fields:
        "id, title, excerpt, slug, featured_media, categories, date, author, tags",
      categories: categoryId,
    },
  });
  return result.data;
};

const useFetchArticleList = (categoryId: number | string | undefined) => {
  const api = useCreateApi("post");
  const result = useQuery({
    queryFn: () => getArticleList(api, categoryId),
    queryKey: ["article", "articleList", categoryId],
    // cacheTime: 1000 * 5,
    staleTime: Infinity,
  });
  return result.data;
};
export default useFetchArticleList;
