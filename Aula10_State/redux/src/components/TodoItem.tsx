import React, { memo } from "react";
import { useDispatch } from "react-redux";
import TodoActions from "./actions/TodoActions";

export interface TodoItemProps {
  id: number;
  value: string;
  completed: boolean;
}

const { CHANGE_TODO } = TodoActions;

const TodoItem = ({ id, value, completed }: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleChangeTodo = (id: number) => {
    dispatch({
      type: CHANGE_TODO,
      payload: { id }, // id: id
    });
  };

  return (
    <li onClick={() => handleChangeTodo(id)} style={{ cursor: "pointer" }}>
      <input
        style={{ marginRight: "10px" }}
        type="checkbox"
        checked={completed}
        readOnly
      />
      {value}
    </li>
  );
};

export default memo(TodoItem);
