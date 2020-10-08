import Cliente from "./repository/Cliente";

const app: HTMLElement | null = document.getElementById("app");

if (app !== null) {
    app.innerHTML = "Teste";
}

function teste(valor: number | undefined | null) {
    console.log(valor);
}

const cliente: Cliente = new Cliente("Leonardo", "Tumadjian", "teste@gmail.com");

console.log(cliente);

// Alto acoplamento
Cliente.estatico();
Cliente.estatico();
Cliente.estatico();
Cliente.estatico();

enum PaymentStatus {
    Aproved, // 1
    Refused, // 2
    Analisys, // 3
    Fraud // 4
}

const returnStatus = 1;

switch (returnStatus) {
    case PaymentStatus.Analisys:
        
        break;

    case PaymentStatus.Refused:
        
        break;

    case PaymentStatus.Aproved:
        
        break;

    default:
        break;
}

// const Users: Users = fetchData<string, number>("http://api.user.com/v1/users");

function identity<T>(arg: T): T {
    return arg;
}

let result: () => string = identity<() => string>(() => '');


const video: HTMLVideoElement = document.createElement("video");