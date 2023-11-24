"use client";

import React, { FormEvent, useState } from "react";
import AddListButton from "@/components/addListButton";

export default function TodoListForm({ addList }: TodoListFormProps) {
  const [todoInput, setTodoInput] = useState("");

  const handleSubmitTodoList = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("todo", todoInput);
    await addList(formData);
    setTodoInput("")
  }

  return (
    <form onSubmit={handleSubmitTodoList} className="flex flex-col w-full">
      <input
        type="text"
        name="todo"
        required
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="border-[#2b2b2b] border rounded-lg px-4 py-1 mb-4"
      />

      <AddListButton />
    </form>
  );
}
