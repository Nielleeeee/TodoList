"use client";

import React, { useState } from "react";

export default function TodoContent({
  id,
  content,
  isDone,
  toggleTodo,
  onDelete,
  updateTodo,
}: Todos) {

  const [isEdit, setIsEdit] = useState(false);
  const [inputEditValue, setInputEditValue] = useState(content);

  const handleInputChange = (event:any) => {
    setInputEditValue(event.target.value);
  }

  const handleCancelChange = () => {
    setInputEditValue(content);
    setIsEdit(false);
  }

  const handleSaveChange = async () => {
    await updateTodo(id, inputEditValue);
    setIsEdit(false);
  }

  return (
    <li className="flex flex-row justify-between">
      <div className="flex flex-row">
        <input
          type="checkbox"
          name="strikethrough"
          id={id}
          hidden
          className="peer"
          defaultChecked={isDone}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />

        <label
          htmlFor={id}
          className={`peer-checked:line-through peer-checked:text-orange-500 peer-checked:opacity-60 text-2xl cursor-pointer ${
            isEdit ? "hidden" : "flex"
          }`}
        >
          {content}
        </label>

        {/* Edit Todo List */}
        <input
          type="text"
          name="editTodo"
          id="editTodo"
          value={inputEditValue}
          onChange={handleInputChange}
          className={`bg-transparent outline-none text-2xl ${
            isEdit ? "flex" : "hidden"
          }`}
        />
      </div>

      <div className="flex flex-row gap-2">
        {/* Check SVG */}
        <span
          className={`cursor-pointer ${isEdit ? "flex" : "hidden"}`}
          onClick={handleSaveChange}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="stroke-greenPastel"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 5L8 15l-5-4"
            />
          </svg>
        </span>

        {/* Cross SVG */}
        <span
          className={`cursor-pointer ${isEdit ? "flex" : "hidden"}`}
          onClick={handleCancelChange}
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-redPastel"
          >
            <g id="Menu / Close_MD">
              <path
                id="Vector"
                d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </span>

        {/* Pencil SVG */}
        <span
          className={`cursor-pointer ${isEdit ? "hidden" : "flex"}`}
          onClick={() => setIsEdit(true)}
        >
          <svg
            fill="#000000"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.7,5.2a1.024,1.024,0,0,1,0,1.448L18.074,9.276l-3.35-3.35L17.35,3.3a1.024,1.024,0,0,1,1.448,0Zm-4.166,5.614-3.35-3.35L4.675,15.975,3,21l5.025-1.675Z" />
          </svg>
        </span>

        <span className="cursor-pointer" onClick={() => onDelete(id)}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z"
              fill="#1C274C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z"
              fill="#1C274C"
            />
          </svg>
        </span>
      </div>
    </li>
  );
}
