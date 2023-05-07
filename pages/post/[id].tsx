import PageLayout from "@/Layouts/PageLayout";
import Image from "next/image";
import Programmer from "public/wallpaper.jpg";
import Raj from "public/pro.jpeg";
import useFetchPost from "@/features/articles/api/hooks/useFetchPost";
import useFetchFeaturedMedia from "@/features/articles/api/hooks/useFetchFeaturedImage";
import ArticleBlock from "@/features/articles/ArticleBlock";
import useFetchAuthor from "@/features/articles/api/hooks/useFetchAuthor";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";

export default function PostIndex() {
  const postId = useRouter().query.id;
  const post = useFetchPost(Number(postId));

  const blogTitleImg = useFetchFeaturedMedia(16)?.source_url;

  const authorDetails = useFetchAuthor(post?.author);
  const authorName = authorDetails?.name;
  const authorImg = authorDetails?.avatar_urls?.["96"];

  const currentCategory = useFetchCategories()?.find(
    (category) => category.id === post?.categories[0]
  );
  console.log(currentCategory, "currentCategory");

  return (
    <PageLayout className="flex flex-col items-center px-8 md:px-32 lg:px-52 xl:px-96">
      {post && (
        <>
          <div className="flex items-center justify-center">
            <Image
              src={blogTitleImg || Programmer}
              alt="programmer"
              width={1000}
              height={300}
              className="object-contain"
            />
          </div>
          <h2 className="pb-4 pt-10 text-xl font-semibold md:text-2xl lg:text-3xl">
            {post?.title.rendered}
          </h2>
          <div className="flex w-full justify-start">
            <div className="flex justify-between gap-x-4 py-6">
              <Image
                alt="author"
                src={authorImg || Raj}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p>{authorName}</p>
                <p>{post?.date?.slice(0, 10)}</p>
              </div>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: post?.content.rendered }} />
        </>
      )}
      <div className="my-20 h-[2px] w-full rounded-full bg-gray-300"></div>
      <h2 className="self-start text-2xl font-semibold">
        See Topics Related to {currentCategory?.name}
      </h2>
      <div className="w-full overflow-x-scroll">
        <ArticleBlock categoryId={currentCategory?.id} />
      </div>
    </PageLayout>
  );
}
