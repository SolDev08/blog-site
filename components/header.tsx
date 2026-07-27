import React from "react";
import Link from "next/link";
import Image from "next/image";
import UserMenu from "./auth/user-menu";

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
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
