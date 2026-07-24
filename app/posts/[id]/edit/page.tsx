import {prisma} from "@/lib/prisma";
import {updatePost} from "@/lib/actions";
import {notFound} from "next/navigation";
import Link from "next/link";
import SubmitButton from "@/components/submit-button";

export default async function EditPage({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const {id} = await params;

  const post = await prisma.post.findUnique({
    where: {id: Number(id)},
  });

  if (!post) {
    notFound();
  }

  const updatePostWithId = updatePost.bind(null, post.id);

  return (
    <div className="min-h-[calc(100vh-120px)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <Link
            href={`/posts/archive`}
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Posts
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Edit Post</h1>
          <p className="text-gray-600 mt-2">Update your thoughts</p>
        </div>

        <form action={updatePostWithId} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={post.title}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              placeholder="Enter your post title"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              name="content"
              defaultValue={post.content}
              required
              rows={10}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
              placeholder="Write your post content here..."
            />
          </div>

          <div className="flex gap-4">
            <SubmitButton />
            <Link
              href={`/posts/${post.id}`}
              className="flex-1 bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors text-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
