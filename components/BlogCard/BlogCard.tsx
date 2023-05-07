import Image from "next/image";
import { useRouter } from "next/router";
import useFetchFeaturedMedia from "@/features/articles/api/hooks/useFetchFeaturedImage";
import fallbackImg from "public/wallpaper.jpg";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import useFetchAuthor from "@/features/articles/api/hooks/useFetchAuthor";
import sanitizeHtml from "sanitize-html";

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
      className="transition-smooth z-0 h-fit w-fit cursor-pointer rounded-md bg-white px-4 py-6 pt-4 shadow-lg hover:bg-gray-100"
      onClick={(e) => {
        router.push(`/post/${postId}`);
      }}
    >
      <div className="h-auto w-[300px] xl:w-[350px]">
        <Image
          src={blogTitleImg || fallbackImg}
          alt="blog-image"
          className="aspect-[16/10] rounded-md object-fill"
          height={300}
          width={400}
        />
        <p className="transition-smooth w-fit cursor-pointer py-4 text-lg font-semibold text-gray-700 underline-offset-2 hover:underline">
          {title.rendered}
        </p>

        <div
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(excerpt.rendered) }}
          className="break-words"
        />

        {/* author */}
        <div className="flex w-fit gap-x-3 pt-4">
          <Image
            src={authorImg || fallbackImg}
            alt="profile-pic"
            className=" rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              router.push("#");
            }}
            height={48}
            width={48}
          />
          <div className="w-fit self-center">
            <Link
              href="#"
              onClick={(e) => e.stopPropagation()}
              className="font-semibold text-gray-800"
            >
              {authorName}
            </Link>
            <div className="flex gap-x-4">
              <p>{date.slice(0, 10)}</p>
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
