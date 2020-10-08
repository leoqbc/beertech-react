export default class Cliente {
    public constructor(
        protected nome: string,
        protected sobrenome: string,
        protected email: string
    ) { }

    getNome() {
        return this.nome;
    }

    protected setNome(nome: string) {
        this.nome = nome;
    }

    static estatico() {
        console.log('chamou metodo estatico');
    }
}