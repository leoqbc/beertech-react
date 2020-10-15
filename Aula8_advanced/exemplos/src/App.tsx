import React, { createContext, useReducer, useState } from 'react';
import Controlador from './components/Controlador';
import counterReducer from "./CounterReducer";

export const ConterContext = createContext<any[]>([]);

export interface CounterState {
  counter: number;
}

// render()
function App() {
  // const [counter, setCounter] = useState<CounterState>({ counter: 0 });
  const [{ counter }, dispatcher] = useReducer(counterReducer, { counter: 0 });

  return (
    <ConterContext.Provider value={[dispatcher]}>
      <div className="App">
        Contador: {counter}
        <Controlador />
      </div>
    </ConterContext.Provider>
  );
}

export default App;
