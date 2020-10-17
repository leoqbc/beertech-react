import React, { ReactNode } from "react";

interface TodoListProps {
  children: ReactNode;
}

const TodoList = ({ children }: TodoListProps) => {
  return <ul style={{ listStyle: "none" }}>{children}</ul>;
};

export default TodoList;
