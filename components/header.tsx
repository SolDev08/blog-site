import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/next.svg"
                alt="Logo"
                width={89}
                height={18}
                priority
              />
            </Link>
          </div>

          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/posts"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Posts
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
