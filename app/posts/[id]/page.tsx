import {prisma} from "@/lib/prisma";
import NotFound from "./not-found";
import PostActions from "@/components/postActions";
import UpvoteBtn from "@/components/upvote-btn";

type PostPageProps = {
  params: Promise<{id: string}>;
};

export default async function PostPage({params}: PostPageProps) {
  const {id} = await params;

  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!post) {
    return NotFound();
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  // 动态导入 BackButton 组件
  const BackButton = (await import("@/components/back-button")).default;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Post Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <BackButton />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Post #{post.id}</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-500">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                Votes: {post.votes ?? 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="space-y-8">
          {/* Post Title */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>
                Published on{" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>•</span>
              <span>Votes: {post.votes ?? 0}</span>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <div className="text-lg leading-relaxed text-gray-700 space-y-4">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Post Footer */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <UpvoteBtn postId={post.id} />
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 2.684C20.113 12.938 20 12.482 20 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m-9.032-2.684l6 4.68c.195.146.195.384 0 .53l-6 4.68a.5.5 0 01-.708 0l-6-4.68c-.195-.146-.195-.384 0-.53l6-4.68a.5.5 0 01.708 0z"
                    />
                  </svg>
                  Share
                </button>
              </div>
              <PostActions postId={post.id} />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
