import React, { useState } from "react";
import Link from "next/link";
import { getPosts } from "../../lib/post";
import PostCard from "../../components/PostCard";
import { PostData } from "../../types/home";
import ArticleTag from "../../components/Article/ArticleTag";

type PostsDataProps = {
  posts: PostData[];
  categories: string[];
};

const Posts = ({ posts, categories }: PostsDataProps) => {
  const [filters, setFilters] = useState([]);

  const toggleFilter = (newCategory) => {
    if (filters.includes(newCategory.toLowerCase())) {
      setFilters((filters) =>
        filters.filter((item) => item !== newCategory.toLowerCase())
      );
    } else {
      setFilters((filters) => [...filters, newCategory.toLowerCase()]);
    }
  };

  return (
    <section className="w-full bg-white">
      <div className="max-w-3xl pb-8 mx-auto font-serif md:py-12 lg:py-16">
        <h2 className="px-8 my-4 text-3xl">Blog</h2>
        <div className="flex px-8 my-9 items-center ">
          <div className="py-2 mr-4">Explore By Category:</div>
          {categories.map((item) => {
            return (
              <ArticleTag
                key={item}
                tag={item}
                emphasis={filters.includes(item.toLowerCase())}
                onClick={() => toggleFilter(item)}
              />
            );
          })}
        </div>
        {posts
          .filter(
            (item) =>
              filters.length == 0 ||
              item.frontMatter.tags
                .map((tag) => {
                  return filters.includes(tag.toLowerCase());
                })
                .reduce((a, b) => a || b, false)
          )
          .map(({ frontMatter, slug }) => {
            const { title, description, tags, thumbnailUrl, date } =
              frontMatter;
            return (
              <PostCard
                key={title}
                slug={slug}
                title={title}
                description={description}
                tags={tags}
                image={thumbnailUrl}
                date={date}
              />
            );
          })}
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const posts = getPosts();
  const rawCategories = posts.map((item) => item.frontMatter.tags).flat();
  const categories = Array.from(new Set(rawCategories));

  return {
    props: {
      posts,
      categories,
    },
  };
};

export default Posts;
