const fs = require("fs");
const globby = require("globby");
const path = require("path");

function addPage(page) {
  const path = page
    .replace("pages", "")
    .replace(".js", "")
    .replace(".mdx", "")
    .replace(".tsx", "");
  const route = path === "/index" ? "" : path;
  return `  <url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
}

const excludePages = ["pages/blog/[slug].tsx"];
const generateSlug = (filename) => {
  return filename.split(".")[0].toLowerCase().replace(/\s+/g, "-");
};

async function generateSitemap() {
  // excludes Nextjs files and API routes.
  const rawPages = await globby([
    "pages/**/*{.js,.mdx,.tsx}",
    "!pages/_*.js",
    "!pages/api",
  ]);

  const postsDirectory = path.join(process.cwd(), "blog");
  const files = fs
    .readdirSync(postsDirectory)
    .map((filename) => generateSlug(filename))
    .map((slug) => {
      return `  <url>
    <loc>${`${process.env.WEBSITE_URL}/blog/${slug}`}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`;
    });
  console.log(files);

  const pages = rawPages.filter((item) => !excludePages.includes(item));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(addPage).join("\n")}
  ${files.join("\n")}
  </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}
generateSitemap();
