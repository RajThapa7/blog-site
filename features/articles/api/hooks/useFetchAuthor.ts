import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface AuthorType {
  name: string;
  avatar_urls: { [key: string]: string };
}

const getAuthorDetails = async (
  api: AxiosInstance,
  authorId: number | undefined
): Promise<AuthorType> => {
  const result = await api.get(`/${authorId}`, {
    params: {
      _fields: "name,avatar_urls",
    },
  });
  return result.data;
};

const useFetchAuthor = (authorId: number | undefined) => {
  const api = useCreateApi("author");
  const result = useQuery({
    queryFn: () => getAuthorDetails(api, authorId),
    queryKey: ["article", authorId],
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 20,
  });
  return result.data;
};
export default useFetchAuthor;
