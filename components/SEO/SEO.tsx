import { DOMAIN_NAME } from "@/global/globalData";
import Head from "next/head";
import { FC } from "react";

type seoPagePropsType = {
  title?: string;
  url?: string;
  description?: string;
  imageUrl?: string;
};

export const SEO: FC<seoPagePropsType> = ({
  url,
  title,
  description,
  imageUrl,
}) => {
  title = title?.slice(0, 50);
  description = description?.slice(0, 400);
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>
        {title ? title.slice(0, 50) + " | Raj Thapa Blog" : "Raj Thapa Blog"}
      </title>

      <meta
        name="title"
        content={
          title ? title.slice(0, 50) + " | Raj Thapa Blog" : "Raj Thapa Blog"
        }
      />
      <meta
        name="description"
        content={
          description
            ? description
            : "Get all tips and tricks for front end development"
        }
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content={
          description
            ? description
            : "Get all tips and tricks for front end development"
        }
      />
      <meta property="og:url" content={url ? url : DOMAIN_NAME} />
      <meta
        property="og:title"
        content={
          title ? title.slice(0, 50) + " | Raj Thapa Blog" : "Raj Thapa Blog"
        }
      />
      <meta
        property="og:image"
        content={imageUrl ? imageUrl : "public/metafallback.webp"}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url ? url : DOMAIN_NAME} />
      <meta
        property="twitter:title"
        content={
          title ? title.slice(0, 50) + " | Raj Thapa Blog" : "Raj Thapa Blog"
        }
      />
      <meta
        property="twitter:image"
        content={imageUrl ? imageUrl : "public/metafallback.webp"}
      />
    </Head>
  );
};
