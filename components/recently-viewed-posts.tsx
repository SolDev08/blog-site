import { cookies } from "next/headers";
import Link from "next/link";

export default async function RecentlyViewedPosts() {
  const cookiesStore = await cookies();
  const recentlyViewed = cookiesStore.get("RecentlyViewedPosts");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!recentlyViewed || JSON.parse(recentlyViewed.value).length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <p className="text-gray-500">No recently viewed posts yet.</p>
        <p className="text-gray-400 text-sm mt-2">Start exploring posts to see them here!</p>
      </div>
    );
  }

  const posts = JSON.parse(recentlyViewed.value);

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Recently Viewed</h2>
      <div className="space-y-3">
        {posts.map((post: { id: number; title: string }) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="block group"
          >
            <div className="bg-white rounded-lg border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
              <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors font-medium">
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
