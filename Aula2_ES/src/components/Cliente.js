import Base from "./Base";

class Cliente extends Base {
    constructor(nome, sobrenome) {
        super(nome);
        this.sobrenome = sobrenome;
    }
}

function formatter() {

}

export default Cliente;

export { formatter };