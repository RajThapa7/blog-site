import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface CategoriesListType {
  id: number;
  name: string;
  slug: string;
  count: number;
}

const getCategories = async (
  api: AxiosInstance
): Promise<CategoriesListType[]> => {
  const result = await api.get("", {
    params: {
      _fields: "id,name,slug,count",
    },
  });
  return result.data;
};

const useFetchCategories = () => {
  const api = useCreateApi("categories");
  const result = useQuery({
    queryFn: () => getCategories(api),
    queryKey: ["article", "categories"],
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 20,
  });
  return result.data;
};
export default useFetchCategories;
