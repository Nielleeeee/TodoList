import React, { useState, useEffect } from "react";
import {addList, toggleTodo} from "@/actions/action";
import AddListButton from "@/components/addListButton";
import { prisma } from "@/db";
import TodoContent from "@/components/todoContent";

async function getTodo() {
  return prisma.todo.findMany();
}


export default async function Home() {
  const todo = await getTodo();

  return (
    <main className="bg-slate-800 w-screen h-screen flex justify-center items-center">
      <section className="bg-white rounded-lg max-w-xl w-full px-8 py-4 flex flex-col gap-8">
        <div>
          <h1 className="text-center font-semibold text-xl mb-4">Todo List</h1>
          <form action={addList} className="flex flex-col w-full">
            <input
              type="text"
              name="todo"
              required
              className="border-[#2b2b2b] border rounded-lg px-4 py-1 mb-4"
            />

            <AddListButton />
          </form>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            {todo.map((todos) => (
              <TodoContent key={todos.id} {...todos} toggleTodo={toggleTodo} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
