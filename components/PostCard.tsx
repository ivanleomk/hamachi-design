import React from "react";
import NextLink from "next/link";

type PostCardProps = {
  title: string;

  image: string;
  description: string;
  slug: string;
  tags: string[];
  date: string;
};

const PostCard = ({
  title,

  image,
  description,
  slug,
  tags,
  date,
}: PostCardProps) => {
  return (
    <div className="pb-8 border-b md:px-8 md:pb-12 lg:pb-16 border-gray-150 dark:border-gray-750 sm:text-center cursor-pointer">
      <img
        src={image}
        className="object-cover object-center w-full md:rounded h-72 mb-10"
      />

      <div className="w-full px-6 md:px-0">
        <h2 className="mt-4 mb-5">
          <NextLink href="/blog/[slug]" as={`/blog/${slug}`} passHref>
            <p className="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata">
              {title}
            </p>
          </NextLink>
        </h2>

        <p className="mt-5 mb-6 text-xs text-gray-500 md:text-sm">
          {date} · 2 minute read
        </p>
        <p className="text-base text-gray-600 lg:text-lg">
          <span>{description}</span>
        </p>
      </div>
    </div>
  );
};

export default PostCard;
