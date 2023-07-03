import Image from "next/image";
import { useRouter } from "next/router";
import useFetchFeaturedMedia from "@/features/articles/api/hooks/useFetchFeaturedImage";
import fallbackImg from "public/placeholder.webp";
import userFallbackImg from "public/userPlaceholder.webp";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import useFetchAuthor from "@/features/articles/api/hooks/useFetchAuthor";
import sanitizeHtml from "sanitize-html";
import dateFormatter from "@/utils/dateFormatter";

export interface IBlogCardProps {
  date: string;
  title: Title;
  excerpt: Excerpt;
  author: number;
  featured_media: number;
  postId: number;
}

export interface Excerpt {
  rendered: string;
  protected: boolean;
}

export interface Title {
  rendered: string;
}

export default function BlogCard({
  title,
  author,
  date,
  excerpt,
  featured_media,
  postId,
}: IBlogCardProps) {
  const router = useRouter();

  const blogTitleImg = useFetchFeaturedMedia(featured_media)?.source_url;

  const authorDetails = useFetchAuthor(author);
  const authorName = authorDetails?.name;
  const authorImg = authorDetails?.avatar_urls?.["96"];

  return (
    <div
      className="transition-smooth z-0 h-fit min-w-[320px] max-w-[320px] cursor-pointer rounded-md bg-white pb-6 shadow-lg hover:bg-gray-100 dark:bg-gray-800 lg:min-w-[400px] lg:max-w-[400px] xl:min-w-[370px] xl:max-w-[370px]"
      onClick={(e) => {
        router.push(`/post/${postId}`);
      }}
    >
      <div className="relative w-full pt-[65%]">
        <Image
          src={blogTitleImg || fallbackImg}
          alt="blog-image"
          className="absolute left-0 top-0 h-full w-full rounded-t-md object-fill"
          fill
        />
      </div>

      <div className="w-full px-4">
        <p className="transition-smooth w-fit cursor-pointer py-4 text-lg font-semibold text-gray-700 underline-offset-2 hover:underline dark:text-gray-200">
          {title.rendered}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(excerpt.rendered) }}
          className="break-words dark:text-gray-300"
        />
        {/* author */}
        <div className="flex w-fit items-center justify-center gap-x-3 pt-4">
          <div className="relative h-12 w-12 rounded-full">
            <Image
              src={authorImg || userFallbackImg}
              alt="profile-pic"
              className="absolute rounded-full object-fill"
              onClick={(e) => {
                e.stopPropagation();
                router.push("#");
              }}
              fill
            />
          </div>
          <div className="w-fit self-center dark:text-gray-400">
            <Link
              href="#"
              onClick={(e) => e.stopPropagation()}
              className="font-semibold text-gray-800 dark:text-gray-300"
            >
              {authorName}
            </Link>
            <div className="flex gap-x-4">
              <p>{dateFormatter(date)}</p>
              <p className="flex items-center">
                <BsDot /> 10&nbsp;min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
