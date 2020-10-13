import IOwner from "./Interfaces/IOwner";

export default class Owners {
    getAll(): Promise<IOwner[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve([
                {
                    id: 1,
                    name: "Pedro Carmo",
                    email: "pedroc@email.com"
                },
                {
                    id: 2,
                    name: "Ana Carolina",
                    email: "ana@email.com"
                },
                {
                    id: 3,
                    name: "Marta Ferreira",
                    email: "marta@email.com"
                },
                {
                    id: 4,
                    name: "Alessandro Gomes",
                    email: "alessandro@email.com"
                },
            ]), 1000);
        });

    }
}