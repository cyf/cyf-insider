import Image from "next/image";
import { useTranslations } from "next-intl";
import { basePath } from "@/constants";
import PostDate from "@/components/post/post-date";
import { Post } from "contentlayer/generated";

export default function PostItem({ post }: { post: Post }) {
  const t = useTranslations();
  return (
    <article className="flex items-center border-b border-gray-200 py-4 dark:border-gray-600">
      <div>
        <header>
          <h2 className="h4 mb-2">
            <a href={`${basePath}/${post.slug}`} className="hover:underline">
              {post.title}
            </a>
          </h2>
        </header>
        <div className="mb-4 text-lg text-gray-600">{post.summary}</div>
        <footer className="text-sm">
          <div className="flex items-center">
            <div className="mr-3 flex shrink-0">
              <a
                className="relative"
                href="https://www.kjxbyz.com"
                target="_blank"
              >
                <span className="absolute inset-0 -m-px" aria-hidden="true">
                  <span className="absolute inset-0 -m-px rounded-full bg-white"></span>
                </span>
                <Image
                  className="relative rounded-full"
                  src={post.authorImg || ""}
                  width={32}
                  height={32}
                  alt={post.author}
                />
              </a>
            </div>
            <div>
              <span className="text-gray-600">By </span>
              <a
                className="font-medium hover:underline"
                href="https://www.kjxbyz.com"
                target="_blank"
              >
                {post.author}
              </a>
              <span className="text-gray-600">
                {" "}
                · <PostDate dateString={post.publishedAt} />
              </span>
            </div>
          </div>
        </footer>
      </div>
      <a href={`${basePath}/${post.slug}`} className="ml-6 block shrink-0">
        <span className="sr-only">Read more</span>
        <svg
          className="h-4 w-4 fill-current text-blue-600"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
        </svg>
      </a>
    </article>
  );
}
