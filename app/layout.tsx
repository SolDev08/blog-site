import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blog-site",
  description: "A minimal bolg-app build with next.js and App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`min-h-full ${geistSans.variable} ${geistSans.variable}`}>
        <div className="min-h-dvh">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col">

          <header className="flex h-14 items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3 font-semibold">
          <Image src="/next.svg" alt="" width={89} height={18} priority />
          </Link>

            <nav className="flex items-center gap-4 text-sm font-medium">
              <Link href="/" className="hover:text-white/80">
              Home
              </Link>
              <Link href="/posts" className="hover:text-white/80">
              Posts
              </Link>

            </nav>
          </header>

            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
            {children}
            </main>


            <footer className="flex h-14 items-center px-4 text-sm sm:px-6">
              2026 Next Bolg
            </footer>

          </div>
        </div>
      </body>
    </html>
  );
}
