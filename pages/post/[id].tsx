import PageLayout from "@/Layouts/PageLayout";
import Image from "next/image";
import Raj from "public/pro.jpeg";
import useFetchPost from "@/features/articles/api/hooks/useFetchPost";
import useFetchFeaturedMedia from "@/features/articles/api/hooks/useFetchFeaturedImage";
import ArticleBlock from "@/features/articles/ArticleBlock";
import useFetchAuthor from "@/features/articles/api/hooks/useFetchAuthor";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { FaShareAlt } from "react-icons/fa";
import { DOMAIN_NAME } from "global/globalData";
import { useMemo } from "react";
import catimg from "public/cat.jpg";
import Loader from "@/components/Loader/Loader";
import dateFormatter from "@/utils/dateFormatter";

export default function PostIndex() {
  const postId = useRouter().query.id;
  const post = useFetchPost(Number(postId));

  const blogTitleImg = useFetchFeaturedMedia(post?.featured_media)?.source_url;

  const authorDetails = useFetchAuthor(post?.author);
  const authorName = authorDetails?.name;
  const authorImg = authorDetails?.avatar_urls?.["96"];

  const currentCategory = useFetchCategories()?.find(
    (category) => category.id === post?.categories[0]
  );

  const currentPath = useRouter().asPath;
  const fullCurrentPath = DOMAIN_NAME + currentPath;

  const data = useMemo(
    () => [
      { id: -1, icon: <FaShareAlt />, link: "" },
      {
        id: 0,
        icon: <BsFacebook className="text-blue-600" />,
        link: "https://www.facebook.com/sharer.php?u=" + fullCurrentPath,
      },

      {
        id: 1,
        icon: <BsTwitter className="text-sky-500" />,
        link: `https://twitter.com/share?url=${fullCurrentPath}`,
      },

      {
        id: 2,
        icon: <BsLinkedin className="text-blue-900" />,
        link: `https://www.linkedin.com/shareArticle?url=${fullCurrentPath}`,
      },
    ],
    [fullCurrentPath]
  );

  return (
    <PageLayout className="flex flex-col items-center bg-white md:bg-gray-50 md:px-24 lg:px-52 xl:px-96">
      {post && blogTitleImg ? (
        <>
          <div className="w-full rounded-md pb-12 md:bg-white">
            <div className="relative w-full pt-[60%]">
              <Image
                src={blogTitleImg || catimg}
                alt="programmer"
                fill
                className="absolute left-0 top-0 h-full w-full rounded-t-md object-fill"
              />
            </div>
            <div className="md:px-12">
              <h2 className="pb-4 pt-10 text-xl font-semibold md:text-2xl lg:text-3xl">
                {post?.title.rendered}
              </h2>
              <div className="flex w-full items-center justify-between pb-14 pt-10">
                <div className="flex justify-between gap-x-4 ">
                  <Image
                    alt="author"
                    src={authorImg || Raj}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p>{authorName}</p>
                    <p>{dateFormatter(post?.date)}</p>
                  </div>
                </div>
                <SocialLinks data={data} />
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: post?.content.rendered }}
              />
            </div>
          </div>
          <div className="my-20 h-[2px] w-full rounded-full bg-gray-300"></div>
          <h2 className="self-start text-2xl font-semibold">
            See Topics Related to {currentCategory?.name}
          </h2>
          <div className="w-full">
            <ArticleBlock
              categoryId={currentCategory?.id}
              className="shadow-gray !bg-gray-50"
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
}

// export async function getStaticProps() {}
