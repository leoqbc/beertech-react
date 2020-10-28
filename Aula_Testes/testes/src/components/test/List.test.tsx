import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import List from "../List";

describe('Testes do componente List, testando os renders', () => {

  test('Renderiza a lista de nomes na tela e verifica pelo nome Leonardo', () => {
    const nomes: Array<string> = ["Leonardo", "Pedro", "João"];

    render(<List names={nomes} />);

    nomes.map(nome => {
      const screenNome = screen.getByText(nome);
      expect(screenNome).toBeInTheDocument();
    });
  });

  test('Testa click em botão de titulo', () => {
    render(<List names={["Leonardo", "Pedro", "João"]} />);

    // Dispara clique no botão pegando pelo seu texto
    fireEvent.click(screen.getByText("Show Name"));

    const result = screen.getByText("Nome adicionado");

    expect(result).toBeInTheDocument();
  })

});