import axios from "axios";

const Type = {
  post: "posts",
  categories: "categories",
  pages: "pages",
  media: "media",
  author: "users",
};

const useCreateApi = (type: keyof typeof Type) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}wp-json/wp/v2/${Type[type]}`;
  const api = axios.create({
    baseURL: url,
  });

  return api;
};

export default useCreateApi;
