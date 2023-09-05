"use client"

import React from "react";

export default function TodoContent({id, content, isDone, toggleTodo}: Todos) {
  return (
    <li>
      <input
        type="checkbox"
        name="strikethrough"
        id={id}
        hidden
        className="peer"
        defaultChecked={isDone}
        onChange={e => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-orange-500 peer-checked:opacity-60 text-2xl cursor-pointer"
      >
        {content}
      </label>
    </li>
  );
}
