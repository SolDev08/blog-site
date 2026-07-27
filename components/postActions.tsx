"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {deletePost} from "@/lib/actions";
import Link from "next/link";

export default function PostActions({postId}: {postId: number}) {
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deletePost(postId);
      router.push("/posts"); // 删除成功后，前端自己跳转
    } catch (error) {
      console.error("Delete failed:", error);
      if (error instanceof Error && error.message.includes("Unauthorized")) {
        router.push("/auth/login");
      } else {
        alert("Something went wrong while deleting the post.");
      }
    } finally {
      setIsDeleting(false);
      setShowConfirm(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <Link
          href={`/posts/${postId}/edit`}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Edit
        </Link>
        <button
          onClick={() => setShowConfirm(true)}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          Delete
        </button>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900">
              Delete this post?
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              This action cannot be undone. The post will be permanently
              removed.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isDeleting}
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:opacity-60"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-60"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
