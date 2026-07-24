import Link from "next/link";
import { getCachedPosts } from "@/lib/utils/cache";
import { Post } from "@/lib/types/post";

export default async function AllPostsPage() {
  const posts: Post[] = await getCachedPosts();

  return (
    <div className="min-h-[calc(100vh-120px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Link
              href="/posts"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              ← Back to Posts
            </Link>
            <h1 className="text-4xl font-bold text-gray-900">All Posts</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse all {posts.length} blog posts
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No posts yet</div>
            <p className="text-gray-500">Check back later for new content!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-4">
                  <time className="text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-sm text-gray-400">
                    {post.content.length} characters
                  </span>
                </div>

                <Link href={`/posts/${post.id}`} className="block">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </h2>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.content.substring(0, 200)}
                    {post.content.length > 200 && "..."}
                  </p>
                </Link>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/posts/${post.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Read more
                    <svg
                      className="ml-1 w-4 h-4"
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
                  <span className="text-sm text-gray-500">
                    {post.votes || 0} votes
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}