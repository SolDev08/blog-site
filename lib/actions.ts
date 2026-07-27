"use server";

import {prisma} from "./prisma";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: {id},
  });
  revalidatePath("/posts"); // 让列表页数据刷新
  redirect("/posts"); // 删完跳回列表页
}

export async function updatePost(id: number, formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.update({
    where: {id},
    data: {title, content},
  });

  revalidatePath("/posts");
  redirect(`/posts/archive`);
}
