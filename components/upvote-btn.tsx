"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {upvotePost} from "@/lib/actions";

interface UpvoteBtnProps {
  postId: number;
  initialVotes?: number;
}

export default function UpvoteBtn({postId, initialVotes = 0}: UpvoteBtnProps) {
  const router = useRouter();
  const [votes, setVotes] = useState(initialVotes);
  const [justVoted, setJustVoted] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isPending) return;

    setIsPending(true);
    setVotes((v) => v + 1);
    setJustVoted(true);
    setTimeout(() => setJustVoted(false), 200);

    try {
      await upvotePost(postId);
      router.refresh(); // 关键：让页面上其他依赖服务端数据的地方也刷新
    } catch (error) {
      setVotes((v) => v - 1);
      console.error("Upvote failed:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      className={`
        flex items-center gap-2 px-4 py-2 text-sm font-medium
        text-gray-700 bg-white border border-gray-300 rounded-md
        hover:bg-gray-50 transition-colors
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
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
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
      <span>{votes}</span>
    </button>
  );
}
