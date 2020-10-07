export default class Base {
    constructor(nome) {
        this.nome = nome;
    }
    
    set nome(value) {
        this._nome = value;
    }

    get nome() {
        return this._nome;
    }
}