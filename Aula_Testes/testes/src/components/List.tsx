import React, { useState } from 'react';

interface IProps {
  names: string[]
}

export default function List({ names }: IProps) {
  const [title, setTitle] = useState("");

  function handleClick() {
    setTitle("Nome adicionado");
  }

  return (
    <>
      <button onClick={handleClick}>Show Name</button>
      <h1>{title}</h1>
      <ul>
        {names.map((name) => <li key={name}>{name}</li>)}
      </ul>
    </>
  );
}