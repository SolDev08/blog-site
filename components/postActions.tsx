"use client";

import {useState} from "react";
import {deletePost} from "@/lib/actions";
import Link from "next/link";

export default function PostActions({postId}: {postId: number}) {
  const [showConfirm, setShowConfirm] = useState(false);

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
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => deletePost(postId)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
