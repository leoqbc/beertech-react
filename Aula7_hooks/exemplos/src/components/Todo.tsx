import React from 'react';

interface ITypeProps {
    titulo: string;
    children: React.ReactNode;
}

export default function Todo({ titulo, children }: ITypeProps) {

    return (
    <>
        <h2>{titulo}</h2>
        <ul>
            {children}
        </ul>
    </>
    );
}