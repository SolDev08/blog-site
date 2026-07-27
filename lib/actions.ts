"use server";

import {prisma} from "./prisma";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {auth} from "@/lib/auth";
import {headers} from "next/headers";

export async function deletePost(id: number) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized: you must be logged in to delete a post.");
  }

  await prisma.post.delete({
    where: {id},
  });

  revalidatePath("/posts");
  // 去掉这一行：redirect("/posts");
}

export async function updatePost(id: number, formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized: you must be logged in to update a post.");
  }

  await prisma.post.update({
    where: {id},
    data: {title, content},
  });

  revalidatePath("/posts");
  redirect(`/posts/archive`);
}

export async function upvotePost(postId: number) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw new Error("Unauthorized: you must be logged in to upvote a post.");
  }
  await prisma.post.update({
    where: {id: postId},
    data: {votes: {increment: 1}},
  });
}
