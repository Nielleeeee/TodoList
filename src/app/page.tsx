import React, { useState, useEffect } from "react";
import addList from "@/actions/addList";
import AddListButton from "@/components/addListButton";

export default async function Home() {
  const res = await fetch(
    "https://64f4a6b7932537f4051a9111.mockapi.io/nielle/todo-list",
    {
      cache: "no-cache",
      next: { tags: ["list-todo"] },
    }
  );

  const list: lists[] = await res.json();


  return (
    <main className="bg-slate-800 w-screen h-screen flex justify-center items-center">
      <section className="bg-white rounded-lg max-w-xl w-full px-8 py-4">
        <h1 className="text-center font-semibold text-xl mb-4">Todo List</h1>
        <form action={addList} className="flex flex-col w-full">
          <input type="text" name="todo" className="border-[#2b2b2b] border rounded-lg px-4 py-1 mb-4" />

          <AddListButton />
        </form>

        <div>
          <ul>
            {list.map((lists) => (
              <li key={lists.id}>{lists.todo}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
