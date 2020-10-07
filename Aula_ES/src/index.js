import Cliente, { formatter } from "./components/Cliente";

const cliente1 = new Cliente("Leonardo", "Tumadjian"); // instância
const cliente2 = new Cliente("Eliana", "Cardoso"); // instância

cliente1.nome = "Leandro";

console.log(cliente1.nome, cliente2.nome);