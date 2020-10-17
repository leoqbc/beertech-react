import React from "react";
import { useDispatch } from "react-redux";
import TodoActions from "./actions/TodoActions";

const { COMPLETE_TODOS } = TodoActions;

const TodoComplete = () => {
  const dispatch = useDispatch();

  const handleCompleted = () => {
    dispatch({
      type: COMPLETE_TODOS,
    });
  };

  return <button onClick={handleCompleted}>Completar Tarefas</button>;
};

export default TodoComplete;
