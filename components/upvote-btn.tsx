"use client";

import {useState} from "react";

interface UpvoteBtnProps {
  postId: number;
  initialVotes?: number;
}

export default function UpvoteBtn({postId, initialVotes = 0}: UpvoteBtnProps) {
  const [votes, setVotes] = useState(initialVotes);
  const [justVoted, setJustVoted] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // 防止触发外层 <Link> 的跳转
    e.stopPropagation(); // 防止事件冒泡

    setVotes((v) => v + 1);
    setJustVoted(true);
    setTimeout(() => setJustVoted(false), 200);

    // 如需持久化投票,可在这里调用 API
    // fetch(`/api/posts/${postId}/upvote`, { method: "POST" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        inline-flex items-center gap-1.5
        px-3.5 py-1
        rounded-full
        text-sm font-medium
        bg-blue-50 text-blue-700
        border border-blue-200
        hover:bg-blue-100 hover:border-blue-300
        active:scale-95
        transition-all duration-150
        ${justVoted ? "scale-105" : ""}
      `}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span>{votes}</span>
    </button>
  );
}
