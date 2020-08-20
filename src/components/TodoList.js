import React from "react";

export default function TodoList({ todo }) {
  return (
    <div>
      <li>{todo.title}</li>
    </div>
  );
}
