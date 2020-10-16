import React from "react";

import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <section className="todo">
      <TodoList>
        <TodoItem key={1} value="Teste 123" />
      </TodoList>
    </section>
  );
}
