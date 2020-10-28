import Calculator from "../math/Calculator";

test('Class Calculator soma 1 + 2 deve ser igual a 3', () => {
  const calculadora = new Calculator(1);
  calculadora.sum(2);
  expect(calculadora.getResult()).toBe(3);
});

test('Class Calculator subtração 10 - 2 deve ser igual a 8', () => {
  const calculadora = new Calculator(10);
  calculadora.sub(2);
  expect(calculadora.getResult()).toBe(8);
});

test('Class Calculator 2 potencia de 2 (2^2) deve ser igual a 4', () => {
  
});

test('Class Calculator conta 10 - 20 deve ser igual a -10', () => {
  
});

test('Class Calculator conta 10 + 20 - 30 deve ser igual a 0', () => {
  
});

test('Class Calculator conta (23 + 48 - 27) ^ 3 deve ser igual a -10', () => {
  
});

test('Class Calculator conta "(5 - 3) ^ 3" deve ser igual a 85184', () => {
  
});

test('Class Calculator conta "10 + 43.2 - 23.77 ^ 2" deve ser igual a −511.8129', () => {
  const expression = new Calculator(0);

  expect(expression.getResult().toFixed(4)).toBe("-511.8129");
});

test('Class Calculator conta "12 + 32 / 5" deve ser igual a 18.4', () => {

  expect(0).toBe(18.4);
});

test('Class Calculator conta "5.5 + 125 ^ 2 / 2 - 33" deve ser igual a 7785', () => {

  expect(0).toBe(0);
});