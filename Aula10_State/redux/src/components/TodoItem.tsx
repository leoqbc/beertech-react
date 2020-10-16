import React from "react";

interface TodoItemProps {
  key: number;
  value: string;
}

const TodoItem = ({ key, value }: TodoItemProps) => <li key={key}>{value}</li>;

export default TodoItem;
