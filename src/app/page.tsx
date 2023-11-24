import React from "react";
import {addList, deleteList, toggleTodo} from "@/actions/action";
import TodoListForm from "@/components/todoListForm";
import { prisma } from "@/db";
import TodoContent from "@/components/todoContent";

async function getTodo() {
  return prisma.todo.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}


export default async function Home() {
  const todo = await getTodo();

  return (
    <main className="bg-slate-800 w-screen h-screen flex justify-center items-center">
      <section className="bg-white/80 rounded-lg max-w-xl w-full min-h-[300px] px-8 py-4 flex flex-col gap-8 shadow-lg">
        <div>
          <h1 className="text-center font-semibold text-xl mb-4">Todo List</h1>
          <TodoListForm addList={addList}/>
        </div>

        <div>
          <ul className="flex flex-col gap-2 overflow-y-scroll max-h-[50vh]">
            {todo.map((todos) => (
              <TodoContent key={todos.id} {...todos} onDelete={deleteList} toggleTodo={toggleTodo} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
