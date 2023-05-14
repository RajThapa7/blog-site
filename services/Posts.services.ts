import { AuthorType } from "@/features/articles/api/hooks/useFetchAuthor";
import { Post } from "@/features/articles/api/hooks/useFetchPost";
import createAxiosInstance from "@/utils/axios";

interface IPostId {
  id: string;
}

export interface IMediaType {
  source_url: string;
}

export const getAllPostsId = async () => {
  const axiosInstance = createAxiosInstance("post");
  const result = await axiosInstance.get<IPostId[]>(``, {
    params: {
      _fields: "id",
    },
  });
  return result;
};

export const getAllPostData = async (id: string | undefined) => {
  const axiosInstance = createAxiosInstance("post");
  const result = await axiosInstance.get<Post>(`/${id}`, {
    params: {
      _fields:
        "id, title, excerpt, slug, featured_media, categories, date, author, tags, content",
    },
  });
  return result.data;
};

export const getAuthorDetails = async (authorId: string | undefined) => {
  const axiosInstance = createAxiosInstance("author");

  const result = await axiosInstance.get<AuthorType>(`/${authorId}`, {
    params: {
      _fields: "name,avatar_urls",
    },
  });
  return result.data;
};

export const getFeaturedMedia = async (featuredMediaId: number | undefined) => {
  const axiosInstance = createAxiosInstance("media");

  const result = await axiosInstance.get<IMediaType>(`/${featuredMediaId}`, {
    params: {
      _fields: "source_url",
    },
  });
  return result.data;
};
