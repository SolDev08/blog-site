import Link from "next/link";
import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import {Suspense} from "react";
import {getCachedPosts} from "@/lib/utils/cache";
import {Post} from "@/lib/types/post";

export default async function PostsPage() {
  const allPosts = await getCachedPosts();
  const posts = allPosts.slice(0, 5); // 只显示最新的5条

  return (
    <div className="min-h-[calc(100vh-120px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-gray-900">Latest Posts</h1>
            <Link
              href="/posts/new"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              New Post
            </Link>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and read our latest blog posts on technology, development,
            and more.
          </p>
          {allPosts.length >= 5 && (
            <div className="mt-4">
              <Link
                href="/posts/all"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                View all posts ({allPosts.length})
              </Link>
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No posts yet</div>
            <p className="text-gray-500">Check back later for new content!</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: Post) => (
              <article
                key={post.id}
                className="group bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <time className="text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>

                  <Link href={`./posts/${post.id}`} className="block">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                    </h2>

                    {post.content && (
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {post.content.substring(0, 120)}
                        {post.content.length > 120 && "..."}
                      </p>
                    )}
                  </Link>

                  <div className="flex items-center justify-between">
                    <Link
                      href={`./posts/${post.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read more
                      <svg
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recently Viewed
          </h2>
          <Suspense fallback={<p>Loading Recently Viewed Posts...</p>}>
            <RecentlyViewedPosts />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
