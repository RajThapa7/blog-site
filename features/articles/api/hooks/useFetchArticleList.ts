import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { ArticleListType } from "../../ArticleBlock";

const getArticleList = async (
  api: AxiosInstance,
  categoryId: number
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

const useFetchArticleList = (categoryId: number) => {
  const api = useCreateApi("post");
  const result = useQuery({
    queryFn: () => getArticleList(api, categoryId),
    queryKey: ["article", "articleList", categoryId],
  });
  return result.data;
};
export default useFetchArticleList;
