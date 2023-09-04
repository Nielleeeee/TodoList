"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function AddListButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className="bg-orange-400 disabled:opacity-80 rounded-lg">
      {pending ? "Adding List..." : "Add List"}
    </button>
  );
}
