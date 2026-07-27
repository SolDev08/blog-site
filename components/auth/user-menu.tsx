"use client";

import {authClient} from "@/lib/auth-client";
import Link from "next/link";

export default function UserMenu() {
  const {data: session, isPending} = authClient.useSession();

  if (isPending) {
    return <p className="text-sm text-gray-400">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/auth/login"
          className="text-sm text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          Log in
        </Link>
        <Link
          href="/auth/signup"
          className="text-sm bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign up
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <span className="text-sm text-gray-500">{session.user.email}</span>

      <nav className="flex items-center gap-6">
        <Link
          href="/"
          className="text-base text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          Home
        </Link>
        <Link
          href="/posts"
          className="text-base text-gray-700 hover:text-gray-900 font-medium transition-colors"
        >
          Posts
        </Link>
      </nav>

      <button
        onClick={() => authClient.signOut()}
        className="text-base text-gray-500 hover:text-gray-900 underline underline-offset-2 transition-colors"
      >
        Log out
      </button>
    </div>
  );
}
