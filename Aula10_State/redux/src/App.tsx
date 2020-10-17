import React from "react";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import Todo from "./components/Todo";
import todoReducers from "./components/reducers/todoReducers";
import { TodoItemProps } from "./components/TodoItem";
import { devToolsEnhancer } from "redux-devtools-extension";

// 1. Criar o Store
// 2. Criar os reducers
// 3. Mapear o store no componente
// 4. Usar o store nos elementos filhos (dispatch)

export interface TodoState {
  todos: TodoItemProps[];
}

const store = createStore(todoReducers, devToolsEnhancer({}));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
