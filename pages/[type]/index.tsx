import { notFound } from "next/navigation";
import { allPosts, Post } from "contentlayer/generated";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import PostItem from "@/components/post/post-item";
import LatestPosts from "@/components/post/latest-posts";
// import Topics from "@/components/post/topics";

import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Blog({
  posts,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t, i18n } = useTranslation(["post"]);

  return (
    <div className="z-10 w-full max-w-6xl px-4 sm:px-6">
      <div className="pb-12 md:pb-20">
        {/* Page header */}
        <div className="max-w-3xl pb-12 text-center md:pb-20 md:text-left">
          <h1 className="h1 mb-4">Blog</h1>
          {/*<p className="text-xl text-gray-600">*/}
          {/*  Stay up to date on the latest from Simple and best news from the Dev*/}
          {/*  world.*/}
          {/*</p>*/}
        </div>

        {/* Main content */}
        <div className="md:flex md:justify-between">
          {/* Articles container */}
          <div className="-mt-4 md:grow">
            {posts.map((post, postIndex) => (
              <PostItem key={postIndex} post={post} />
            ))}
          </div>

          {/* Sidebar */}
          {posts.length && (
            <aside className="relative mt-12 md:ml-12 md:mt-0 md:w-64 md:shrink-0 lg:ml-20">
              <LatestPosts posts={posts.slice(0, 5)} />
              {/*<Topics />*/}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = (async (context) => {
  const locale = context.locale;
  const type = context.params?.type;
  if (!locale || !type) return notFound();
  const posts = allPosts
    .filter((post) => post.slug.startsWith(`${locale}/${type}`))
    .sort((a, b) => {
      return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
    });
  if (!posts || posts.length === 0) return notFound();
  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, ["post", "header", "footer"])),
    },
  };
}) satisfies GetServerSideProps<{
  posts: Post[];
}>;
