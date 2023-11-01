import type { GetServerSidePropsContext } from "next";
import { allPosts } from "contentlayer/generated";

const domain =
  process.env.NODE_ENV === "production"
    ? "https://chenyifaer.com/join"
    : "http://localhost:3000/join";

function generateSiteMap() {
  const sitemapStr = allPosts
    .sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    })
    .map(
      (post) =>
        `
          <url>
            <loc>${domain}/${post.slug}</loc>
            <lastmod>${new Date()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1</priority>
          </url>
        `,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapStr}
    </urlset>
  `;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {}
