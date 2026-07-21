import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/header"
import Footer from "@/components/footer"

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
        <div className="min-h-dvh ">
          <div className="mx-auto flex min-h-dvh w-full max-w-[1100px] flex-col bg-white">
            <Header />
            <main className="flex-1 px-4 py-8 sm:px-6 sm:py-10">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
