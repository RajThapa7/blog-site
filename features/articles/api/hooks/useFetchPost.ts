import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface Post {
  id: number;
  date: string;
  slug: string;
  title: Title;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  categories: number[];
  tags: any[];
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface Title {
  rendered: string;
}

const getPost = async (api: AxiosInstance, postId: number): Promise<Post> => {
  const result = await api.get(`/${postId}`, {
    params: {
      _fields:
        "id, title, excerpt, slug, featured_media, categories, date, author, tags, content",
    },
  });
  return result.data;
};

const useFetchPost = (postId: number) => {
  const api = useCreateApi("post");
  const result = useQuery({
    queryFn: () => getPost(api, postId),
    queryKey: ["article", "post", postId],
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 20,
  });
  return result.data;
};
export default useFetchPost;
