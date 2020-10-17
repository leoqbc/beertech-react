import { AnyAction } from "redux";
import { TodoState } from "../../App";
import { TodoItemProps } from "../TodoItem";
import TodoActions from "../actions/TodoActions";

const { ADD_TODO, INIT_STATE, CHANGE_TODO, COMPLETE_TODOS } = TodoActions;

// lembrem de inicializar o store/state
const todoReducers = (state: TodoState = { todos: [] }, action: AnyAction) => {
  switch (action.type) {
    case ADD_TODO:
      // adicionar tarefa
      // evoluir o estado colocando  a tarefa
      return state;
    case INIT_STATE:
      const newState = { ...state };
      newState.todos = [
        {
          id: 1,
          value: "Jogar Counter Strike",
          completed: false,
        },
        {
          id: 2,
          value: "Jogar Dota",
          completed: false,
        },
        {
          id: 3,
          value: "Jogar Halo 5",
          completed: false,
        },
        {
          id: 4,
          value: "Crash 5",
          completed: false,
        },
        {
          id: 5,
          value: "Among Us",
          completed: false,
        },
      ];

      return newState;
    case CHANGE_TODO:
      const todos = state.todos.map((todo: TodoItemProps) => {
        if (todo.id !== action.payload.id) return todo;
        todo.completed = !todo.completed;
        return todo;
      });

      return { ...state, todos };

    case COMPLETE_TODOS:
      return {
        ...state,
        todos: state.todos.filter(({ completed }) => !completed),
      };

    default:
      break;
  }

  return state;
};

export default todoReducers;
