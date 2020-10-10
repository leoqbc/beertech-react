class Colaborador {
    constructor(
        protected nome: string,
        protected email: string
    ) { }

    readNameEmail(id: number) {

    }

    // Conversa com uma api de forma direta
    sendPostToAPI() {

    }
}

class RESTRequester {
    protected url: string = "https://api.company.com/users";

    sendPostToApi() {
        // axios.post(this.url); // hardcoded: lembrar de ser em config
    }
}

interface IDataStoreAction {
    getData(data: object): boolean;
    storeData(): boolean;
}

class StoreCookie implements IDataStoreAction {
    getData(data: object): boolean {

        return true;
    }
    storeData(): boolean {
        return true;
    }
}

// Armazena dados ao no cookie ou no localStorage
// extendemos DataStore via interface
// Open/Close
class DataStore {
    // Inversão de depencia
    // Dependemos de uma interface e não uma implementação
    store(storeAction: IDataStoreAction, data: object) {
        storeAction.getData(data);
        storeAction.storeData();
    }
}

class StoreLocalStorage implements IDataStoreAction {
    getData(data: object): boolean {

        return true;
    }
    storeData(): boolean {

        return true;
    }
}

// Open/Close
const actionLocalStorage: IDataStoreAction = new StoreLocalStorage();

const actionCookies: IDataStoreAction = new StoreCookie();

const dataStore: DataStore = new DataStore();


const rest: RESTRequester = new RESTRequester();

// Liskov substitution
dataStore.store(actionCookies, {});


// interface segregation
interface ReadAction {
    getFileUrl(url: string): boolean;
    loadFile(): boolean;
}

interface WriteAction {
    getFileCursor(cursor: string): boolean;
    write(textContent: string): boolean;
}

class FileManipulation implements WriteAction {
    
    getFileCursor(cursor: string): boolean {
        return true;
    }
    
    write(textContent: string): boolean {
        return true;
    }
}

class QueueManipulation implements ReadAction {
    getFileUrl(url: string): boolean {
        return true;
    }
    loadFile(): boolean {
        return true;
    }
}

// ============= Alguns Design Patterns ===========
 
// Factory Method

class Player {

}

// factory method
const player: Player = new Player(800, 600, "Frase de Erro");

player.setSources({ src: "", type: "" });

player.render("idElement");

class PlayerFactory {

    // Singleton(as vezes anti pattern) validar se já não instanciou esse objeto
    static makePlayer(params: object) {
        
        const player: Player = new Player(800, 600, "Frase de Erro");

        return player;
    }
}

// PlayerFactory.makePlayer();

const hamburguerBuilder = new HamburguerBuilder();

// DSL Domain Specific Language
// Method chainning
// Builder 
hamburguerBuilder
    .addQueijo()
    .addCarne()
    .Pao();

class DOMElementIterator {
    [Symbol.iterator] = function () {

    }
}

