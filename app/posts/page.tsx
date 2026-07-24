import Link from "next/link";
import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import {Suspense} from "react";
import {getCachedPosts} from "@/lib/utils/cache";
import {Post} from "@/lib/types/post";

export default async function PostsPage() {
  const allPosts = await getCachedPosts();
  const posts = allPosts.slice(0, 6); // 最多显示6个posts

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
          {allPosts.length > 6 && (
            <div className="mt-4">
              <Link
                href="/posts/archive"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                View all posts ({allPosts.length})
              </Link>
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  No Posts Yet
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We haven&apos;t published any posts yet. Check back soon for
                  exciting content!
                </p>
                <Link
                  href="/posts/new"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Your First Post
                </Link>
              </div>

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What to expect?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        Expert Insights
                      </p>
                      <p className="text-gray-500 text-sm">
                        Learn from industry professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Tutorials</p>
                      <p className="text-gray-500 text-sm">
                        Step-by-step guides and tutorials
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">
                        News & Updates
                      </p>
                      <p className="text-gray-500 text-sm">
                        Stay updated with the latest
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
