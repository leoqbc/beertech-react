import React, { useEffect, useState } from 'react';
import Atividade, { IAtividadeProps } from './components/Atividade';
import Todo from './components/Todo';

function App() {
  const [atividades, setAtividade] = useState<IAtividadeProps[]>([]);

  // Ciclo vida do componente
  // uma unica vez
  useEffect(() => {

    setAtividade([
      {
        id: 1,
        nome: "Jogar bola",
        completed: false
      },
      {
        id: 2,
        nome: "Dar banho na criança",
        completed: true
      }
    ]);

    setTimeout(() => {
      setAtividade((prevState) => {
        console.log([...prevState]);

        return prevState;
      });
    }, 3000);

  }, []);

  return (
    <div className="App">
      <Todo titulo="Todo App">
        {atividades.map((atividade: IAtividadeProps) => <Atividade key={atividade.id} {...atividade} />)}
      </Todo>
    </div>
  );
}


export default App;
