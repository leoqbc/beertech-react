interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export default class User {
    constructor (
        public id: number,
        public name: string,
        public email: string,
        public address: Address
    ) { }
}