import soma from "../math/soma";

test('Verica se a soma retorna de formata, 2 + 2 = 4', () => {
  const result:number = soma(2, 2);

  expect(result).toBe(4);
});

test('Verica se a soma retorna de formata, 10 + 2 = 12', () => {
  const result:number = soma(10, 2);

  expect(result).toBe(12);
});

test('Verica se a soma retorna de formata, -10 + 2 = -8', () => {
  const result:number = soma(-10, 2);

  expect(result).toBe(-8);
});