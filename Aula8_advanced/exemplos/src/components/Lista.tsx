import React from 'react';
import { Aluno } from "../App2";

export default function Lista({ alunos }: { alunos: Aluno[] }) {
    return (
        <ul>
            {alunos.map((aluno) => <li key={aluno.id}>{aluno.nome}</li>)}
        </ul>
    );
}