import Link from "next/link";

// 从生成的客户端导入
import {PrismaClient} from "../generated/prisma/client";
import {PrismaBetterSqlite3} from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({adapter});

export default async function PostsPage() {
  // 从SQLite数据库获取帖子数据，按createdAt降序
  const posts = await prisma.post.findMany({
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>

        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`./posts/${post.id}`}
                  className="text-lg font-semibold text-zinc-950 hover:text-blue-600 transition-colors"
                >
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
