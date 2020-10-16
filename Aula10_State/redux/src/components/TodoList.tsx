import React, { ReactNode } from "react";

interface TodoListProps {
  children: ReactNode;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul>{children}</ul>;
};

export default TodoList;
