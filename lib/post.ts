import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// type frontMatterInformation = {
//   title: string;
//   description: string;
//   date: string;
//   categories: string[];
// };

const postsDirectory = path.join(process.cwd(), "blog");

const generateSlug = (filename: string): string => {
  return filename.split(".")[0].toLowerCase().replace(/\s+/g, "-");
};

export const getPosts = () => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf-8"
    );
    const { data: frontMatter, content } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: generateSlug(filename),
      filename,
    };
  });
  return posts;
};

export const getPostData = async (filename) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(postsDirectory, filename),
    "utf-8"
  );
  const { data, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, { scope: data });
  return mdxSource;
};

export const getAllSlugs = () => {
  const files = fs.readdirSync(postsDirectory);
  const slugs = files.map((filename) => {
    return {
      params: {
        slug: generateSlug(filename),
      },
    };
  });
  return slugs;
};

// const postDirectory = path.join(process.cwd(), "pages/blog/");

// export const getPostCategories = () => {
//   const fileNames = fs.readdirSync(postDirectory);

//   const allPostsData = fileNames
//     .map((filename) => {
//       const slug = filename.replace(".mdx", "");

//       const fullPath = path.join(postDirectory, filename);
//       //Extracts contents of the MDX file
//       const fileContents = fs.readFileSync(fullPath, "utf8");
//       const { data } = matter(fileContents);

//       const frontmatter = {
//         ...data,
//         date: data.date,
//       };
//       return frontmatter;
//     })
//     .map((item: frontMatterInformation) => {
//       return item.categories;
//     });

//   const allCategories: string[][] = allPostsData.concat(["latest"]);
//   const uniqueCategories = new Set(allCategories.flat());
//   return Array.from(uniqueCategories).map((item) => {
//     return {
//       params: {
//         slug: item,
//       },
//     };
//   });
// };

// export const getSortedPosts = () => {
//   //Reads all the files in the post directory
//   const fileNames = fs.readdirSync(postDirectory);

//   const allPostsData = fileNames
//     .filter((filename) => filename !== "index.tsx")
//     .map((filename) => {
//       const slug = filename.replace(".mdx", "");

//       const fullPath = path.join(postDirectory, filename);
//       //Extracts contents of the MDX file
//       const fileContents = fs.readFileSync(fullPath, "utf8");
//       const { data } = matter(fileContents);

//       const frontmatter = {
//         ...data,
//         date: data.date,
//       };
//       return {
//         slug,
//         display: true,
//         ...frontmatter,
//       };
//     });

//   return allPostsData;
// };

// export const fetchPostSlugs = () => fs.promises.readdir(postsDirectory);

// export const getAllPostSlugs = () => {
//   const fileNames = fs.readdirSync(postDirectory);

//   return fileNames
//     .filter((item) => item !== "index.tsx")
//     .map((filename) => {
//       return {
//         params: {
//           slug: filename.replace(".mdx", ""),
//         },
//       };
//     });
// };
