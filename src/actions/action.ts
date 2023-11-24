"use server";

import { prisma } from "@/db";
import { revalidateTag } from "next/cache";

export async function addList(e: FormData) {
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
}

export async function toggleTodo(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone } });
}

export async function editList(id: string, isDone: boolean) {
  await prisma.todo.update({ where: { id }, data: { isDone } });
}

export async function deleteList(id: string) {
  await prisma.todo.update({
    where: { id },
    data: { isDeleted: true }
  });

  revalidateTag("list-todo");
}
