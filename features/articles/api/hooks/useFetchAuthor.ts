import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface AuthorType {
  name: string;
  avatar_urls: { [key: string]: string };
}

const getAuthorDetails = async (
  api: AxiosInstance,
  authorId: number
): Promise<AuthorType> => {
  const result = await api.get(`/${authorId}`, {
    params: {
      _fields: "name,avatar_urls",
    },
  });
  return result.data;
};

const useFetchAuthor = (authorId: number) => {
  const api = useCreateApi("author");
  const result = useQuery({
    queryFn: () => getAuthorDetails(api, authorId),
    queryKey: ["article", authorId],
  });
  return result.data;
};
export default useFetchAuthor;
