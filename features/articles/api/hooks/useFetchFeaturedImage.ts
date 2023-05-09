import useCreateApi from "@/api/useCreateApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

const getFeaturedMedia = async (
  api: AxiosInstance,
  featuredMediaId: number | undefined
): Promise<{ source_url: string }> => {
  const result = await api.get(`/${featuredMediaId}`, {
    params: {
      _fields: "source_url",
    },
  });
  return result.data;
};

const useFetchFeaturedMedia = (featuredMediaId: number | undefined) => {
  const api = useCreateApi("media");
  const result = useQuery({
    queryFn: () => getFeaturedMedia(api, featuredMediaId),
    queryKey: ["article", "featuredMedia", featuredMediaId],
  });
  return result.data;
};
export default useFetchFeaturedMedia;
