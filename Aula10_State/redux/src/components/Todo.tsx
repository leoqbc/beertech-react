import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoState } from "../App";
import TodoComplete from "./TodoComplete";
import TodoActions from "./actions/TodoActions";

import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

const { INIT_STATE } = TodoActions;

export default function Todo() {
  // disparo para os reducers
  const dispatch = useDispatch();

  const { todos } = useSelector((state: TodoState) => state);

  useEffect(() => {
    dispatch({
      type: INIT_STATE,
    });
  }, [dispatch]);

  return (
    <section className="todo">
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </TodoList>
      <TodoComplete />
    </section>
  );
}
