// quem usa?


// Hoisting

// const let

// let vai deixar alteração da variavel
{
    let escopada = 123;
}

let a = 12;

a += 2;

a++;

const b = 123;

function teste() {
    let numero = 123; // document
}

teste();

// console.log(numero);

const objeto = {
    nome: "João"
}

objeto.nome = "Pedro";
objeto.sobrenome = "Lara";

// objeto = "";

// Object.assign

const novoObj = {
    ...objeto
}

console.log(objeto.sobrenome);

// IFFE
(function (document) {
    var teste = 123;

})(document);

const value1 = 'Leonardo';
const value2 = 'Pedro';

const valor = `
<ul>
    <li>${value1}</li>
    <li>${value2}</li>
</ul>
`;
// formatter([], value1, value2, value3)
function formatter(text, ...variables) {
    console.log(text, variables);
}

// Styled Components
const tageado = formatter`
    Olá meu nome é ${value1}
`;

// button.onclick = function () { this };

var Cliente = {
    setNome: function() {
        this.element.onclick = () => { 
            
        }
    }
}

// () => {}

