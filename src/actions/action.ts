"use server";

import { prisma } from "@/db";
import { revalidateTag } from "next/cache";

export async function addList(e: FormData) {
  try {
    const content = e.get("todo")?.toString();

    if (!content || typeof(content) !== "string") {
      throw new Error("Invalid Content");
    }
  
    await prisma.todo.create({
      data: {
        content: content as string,
        isDone: false,
        isDeleted: false,
      },
    });
  
    revalidateTag("list-todo");
  } catch (error) {
    console.error("Failed to add list: ", error);
    throw error;
  }
}

export async function toggleTodo(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone } });
}

export async function updateTodo(id: string, content: string) {
  await prisma.todo.update({
    where: { id },
    data: { content: content as string }
  });

  revalidateTag("list-todo");
}

export async function deleteList(id: string) {
  await prisma.todo.update({
    where: { id },
    data: { isDeleted: true }
  });

  revalidateTag("list-todo");
}


