import React from "react"
import Link from "next/link";
import Image from "next/image"

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between px-4 sm:px-6 border-b border-[#000000]/10">
      <Link href="/" className="flex items-center gap-3 font-semibold">
        <Image src="/next.svg" alt="" width={89} height={18} priority />
      </Link>

      <nav className="flex items-center gap-4 text-sm font-medium">
        <Link href="/" className="hover:text-black/70">
          Home
        </Link>
        <Link href="/posts" className="hover:text-black/70">
          Posts
        </Link>

      </nav>
    </header>
  )
}  