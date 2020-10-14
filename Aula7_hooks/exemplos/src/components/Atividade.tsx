import React, { FunctionComponent } from "react";

export interface IAtividadeProps {
    id: number,
    nome: string,
    completed?: boolean
}

const Atividade: FunctionComponent<IAtividadeProps> = ({ nome, completed = false }) => {
    return (
        <li>{nome}: {completed ? 'Realizada' : 'Em andamento'}</li>
    )
}

export default Atividade;