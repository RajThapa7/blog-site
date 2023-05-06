import Image, { StaticImageData } from "next/image";
import { BsDot } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";

export interface IBlogCardProps {
  title: string;
  author: string;
  date: string;
  blogTitleImg: StaticImageData | string;
  authorImg: StaticImageData | string;
  readTime: number;
}

export default function BlogCard({
  title,
  author,
  date,
  blogTitleImg,
  authorImg,
  readTime,
}: IBlogCardProps) {
  const router = useRouter();
  return (
    <div
      className="transition-smooth h-fit w-fit rounded-md bg-white px-4 py-6 pt-4 shadow-lg hover:bg-gray-100"
      onClick={(e) => {
        router.push("/blog");
      }}
    >
      <div className="h-fit w-80">
        <Image
          src={blogTitleImg}
          alt="blog-image"
          className="rounded-md object-contain"
        />
        <p className="transition-smooth cursor-pointer py-4 text-lg font-semibold text-gray-700 underline-offset-2 hover:underline">
          {title}
        </p>

        {/* author */}
        <div className="flex w-fit gap-x-3 pt-4">
          <div className="h-16 w-16">
            <Image
              src={authorImg}
              alt="profile-pic"
              className="rounded-full object-contain"
              onClick={(e) => {
                e.stopPropagation();
                router.push("#");
              }}
            />
          </div>
          <div className="w-fit self-center">
            <Link
              href="#"
              onClick={(e) => e.stopPropagation()}
              className="font-semibold text-gray-800"
            >
              {author}
            </Link>
            <div className="flex gap-x-4">
              <p>{date}</p>
              <p className="flex items-center">
                <BsDot /> {readTime}&nbsp;min read
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
