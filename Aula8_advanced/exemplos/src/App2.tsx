import React, { ChangeEvent, useRef, useState } from 'react';
import Lista from "./components/Lista";

export interface Aluno {
  id: number,
  nome: string
}

function App() {

  const [alunos, setAlunos] = useState<Aluno[]>([
    {
      id: 1,
      nome: "Leonardo"
    },
    {
      id: 2,
      nome: "João"
    },
    {
      id: 3,
      nome: "Pedro"
    }
  ]);

  const alunoRef = useRef<HTMLInputElement>(null); // como se fosse document.getElementByID

  const handleClick = () => {
    if (alunoRef.current === null) {
      return;
    }
    setAlunos([
      ...alunos,
      {
        id: alunos.length + 1,
        nome: alunoRef.current.value
      }
    ]);
  }

  return (
      <div className="App">
        digite seu nome:
        <input type="text" ref={alunoRef} />
        <button onClick={handleClick}>Cadastrar</button>
        <Lista alunos={alunos} />
      </div>
  );
}

export default App;
