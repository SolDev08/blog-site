import { unstable_cache } from 'next/cache';
import { PrismaClient } from '../../app/generated/prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import { Post } from '../types/post';

// 创建 Prisma 客户端实例
const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || 'file:./dev.db',
});

const prisma = new PrismaClient({ adapter });

// 缓存获取帖子的函数
export const getCachedPosts = unstable_cache(
  async (): Promise<Post[]> => {
    'use cache';

    const posts = await prisma.post.findMany({
      take: 12,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return posts as Post[];
  },
  ['posts'],
  { tags: ['posts'], revalidate: 3600 } // 1小时后重新验证
);

// 获取单个帖子的缓存函数
export const getCachedPost = unstable_cache(
  async (id: number): Promise<Post | null> => {
    'use cache';

    const post = await prisma.post.findUnique({
      where: { id },
    });

    return post as Post | null;
  },
  ['post'], // 基本的缓存键
  { tags: ['posts'], revalidate: 3600 }
);

// 获取所有帖子的数量（用于缓存键）
export const getTotalPostsCount = unstable_cache(
  async (): Promise<number> => {
    const count = await prisma.post.count();
    return count;
  },
  ['posts-count'],
  { tags: ['posts'], revalidate: 3600 }
);