import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { getAllSlugs, getPostData, getPosts } from "../../lib/post";
import { PostData } from "../../types/home";
import Table from "../../components/Article/Table";
import Thead from "../../components/Article/Thead";
import THeadCell from "../../components/Article/THeadCell";
import Heading from "../../components/Article/Heading";
import ListContainer from "../../components/Article/ListContainer";
import Paragraph from "../../components/Article/Paragraph";
import ListItem from "../../components/Article/ListItem";
import Blockquote from "../../components/Article/Blockquote";
import ArticleTag from "../../components/Article/ArticleTag";
import { useRouter } from "next/router";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";

const components = {
  table: Table,
  thead: Thead,
  th: THeadCell,
  h1: (props) => <Heading depth={1} {...props} />,
  h2: (props) => <Heading depth={2} {...props} />,
  h3: (props) => <Heading depth={3} {...props} />,
  h4: (props) => <Heading depth={4} {...props} />,
  h5: (props) => <Heading depth={5} {...props} />,
  h6: (props) => <Heading depth={6} {...props} />,
  p: Paragraph,
  ol: (props) => <ListContainer ordered={true} {...props} />,
  ul: (props) => <ListContainer ordered={false} {...props} />,
  li: ListItem,
  blockquote: Blockquote,
};

type PostProps = {
  post: PostData;
  content: any;
};

const Post = ({ post, content }: PostProps) => {
  const {
    frontMatter: { title, description, tags, thumbnailUrl, date },
  } = post;
  const router = useRouter();
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-7xl px-4 w-full">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <div>
              <h1 className="text-3xl pt-4 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                {title}
              </h1>
            </div>
          </div>
        </header>
        <div className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 mt-10">
          <div>
            <div className="prose prose-lg">Tags</div>
            {tags.map((tag) => {
              return (
                <ArticleTag
                  tag={tag}
                  key={tag}
                  emphasis={false}
                  onClick={() => {
                    router.push("/blog");
                  }}
                />
              );
            })}
            <p className="mt-10 cursor-pointer text-blue-400">
              <Link href="/blog">← Back to the blog</Link>
            </p>
          </div>
          <div className="col-span-3">
            {" "}
            <MDXRemote {...content} components={components} />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: getAllSlugs(),
    fallback: false,
  };
};

export const getStaticProps = async ({ params: slug }) => {
  const post = getPosts().find((item) => item.slug === slug.slug);
  const content = await getPostData(post.filename);

  return {
    props: { post, content },
  };
};
export default Post;
