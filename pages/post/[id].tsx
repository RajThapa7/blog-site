import PageLayout from "@/layouts/PageLayout";
import Image from "next/image";
import ArticleBlock from "@/features/articles/ArticleBlock";
import useFetchCategories from "@/features/articles/api/hooks/useFetchCategories";
import { useRouter } from "next/router";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { DOMAIN_NAME } from "global/globalData";
import { useMemo } from "react";
import catimg from "public/cat.jpg";
import Loader from "@/components/Loader/Loader";
import { SEO } from "@/components/SEO/SEO";
import { useDarkMode } from "@/layouts/ThemeProvider";
import { GetStaticPaths, GetStaticPropsContext, NextPage } from "next";
import {
  IMediaType,
  getAllPostData,
  getAllPostsId,
  getAuthorDetails,
  getFeaturedMedia,
} from "@/services/Posts.services";
import { Post } from "@/features/articles/api/hooks/useFetchPost";
import { AuthorType } from "@/features/articles/api/hooks/useFetchAuthor";
import dateFormatter from "@/utils/dateFormatter";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { useLoaded } from "@/hooks/useLoaded";

interface IPostPageType {
  postData: Post;
  authorData: AuthorType;
  mediaData: IMediaType;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = await getAllPostsId();
  const paths = allPaths.data.map((posts) => ({
    params: { id: posts.id.toString() },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const postData = await getAllPostData(params?.id as string);
  const authorData = await getAuthorDetails(postData?.author.toString());
  const mediaData = await getFeaturedMedia(postData?.featured_media);

  return {
    props: {
      postData,
      authorData,
      mediaData,
    },
    revalidate: 10,
  };
}

const PostIndex: NextPage<IPostPageType> = ({
  postData,
  authorData,
  mediaData,
}) => {
  const post = postData;

  const blogTitleImg = mediaData?.source_url;

  const authorDetails = authorData;
  const authorName = authorDetails?.name;
  const authorImg = authorDetails?.avatar_urls?.["96"];

  const currentCategory = useFetchCategories()?.find(
    (category) => category.id === post?.categories[0]
  );

  const currentPath = useRouter().asPath;
  const fullCurrentPath = DOMAIN_NAME + currentPath;

  const dark = useDarkMode()?.darkMode;

  const loaded = useLoaded();

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
    <PageLayout className="flex flex-col items-center bg-white dark:bg-gray-800 md:px-24 lg:px-52 xl:px-96">
      {post && blogTitleImg ? (
        <>
          {/* for seo  */}
          <SEO
            imageUrl={blogTitleImg}
            url={fullCurrentPath}
            title={post?.title?.rendered}
            description={post?.title?.rendered}
          />

          <div className="w-full rounded-md pb-12 md:bg-white md:dark:bg-transparent">
            <div className="px-3">
              {/* title  */}
              <h2 className="blog-title pb-4 font-['Rubik'] text-3xl font-semibold dark:text-gray-300 lg:pt-10 lg:text-[42px]">
                {post?.title.rendered}
              </h2>
              {/* author image and date */}
              <div className="flex w-full items-center justify-between pb-14 pt-10">
                <div className="flex justify-between gap-x-4 ">
                  <Image
                    alt="author"
                    src={authorImg}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="dark:text-gray-400">
                    <p>{authorName}</p>
                    <p>{dateFormatter(post?.date)}</p>
                  </div>
                </div>
                <SocialLinks data={data} />
              </div>
            </div>
            <div className="relative mb-12 w-full pt-[60%]">
              <Image
                src={blogTitleImg || catimg}
                alt="programmer"
                fill
                className="absolute left-0 top-0 h-full w-full object-fill"
              />
            </div>
            {/* rendered content  */}
            <div className="md:px-12">
              <div
                className={`${
                  loaded && dark && "dark-mode"
                } text-[18px] leading-loose dark:text-gray-300`}
                dangerouslySetInnerHTML={{ __html: post?.content.rendered }}
              />
            </div>
          </div>
          {/* separator  */}
          <div className="my-20 h-[2px] w-full rounded-full bg-gray-300"></div>
          {/* related topics */}
          <h2 className="self-start text-2xl font-semibold dark:text-gray-300">
            See Topics Related to {currentCategory?.name}
          </h2>
          <div className="w-full">
            <ArticleBlock
              categoryId={currentCategory?.id}
              className={
                loaded && dark ? "dark-shadow" : "shadow-gray !bg-gray-50"
              }
            />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </PageLayout>
  );
};

export default PostIndex;
