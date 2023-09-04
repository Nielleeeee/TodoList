"use server";

import { revalidateTag } from "next/cache";

export default async function addList(e: FormData) {
  const content = e.get("todo")?.toString();

  await fetch("https://64f4a6b7932537f4051a9111.mockapi.io/nielle/todo-list", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(content),
  });

  revalidateTag("list-todo");
}
