const valor: number = 123;
const texto: string = "valor";

// inferencia
const valor2 = "valor";

// inferencia com tipo
let valor3 = 12;

// valor3 = "string";

let valor4: number = 1.2;
let ativo: boolean = true;

let status2: boolean;

let nomes: string[] = []; // inicializar

// nomes.push("Leandro");

interface Pessoa {
    nome: string;
    sobrenome: string;
    readonly id?: number;
}

let pessoas: Pessoa[] = [];

let names = [];

pessoas.push({
    nome: "Leonardo",
    sobrenome: "Tumadjian"
});

pessoas.push({
    nome: "Carlos",
    sobrenome: "Pereira"
});

pessoas[0].nome = "João";

// Conversão explicita
// Number("12")

console.log(pessoas);

function getPessoa(): Pessoa {
    return {
        nome: "Carlos",
        sobrenome: "Pereira"
    };
}

interface Component {
    (htmlElement: string) : string;
}

let functionComponent: Component = (htmlElement: string): string => {
    return htmlElement;
}

type Status = "Ativo" | "Inativo" | "Indefinido";

function checkStatus(status: Status) {
    switch (status) {
        case 'Ativo':
            
            break;
        case 'Inativo':
            
            break;
    }
}

checkStatus("Ativo");

function MyList(teste: string): string {
    return teste;
}

