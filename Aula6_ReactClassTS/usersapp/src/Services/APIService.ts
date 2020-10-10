import IAPIHandler from "../Interfaces/IAPIHandler";
import IUsers from "../Interfaces/IUsers";

export default class APIService {
    constructor(
        public apiAccess: IAPIHandler
    ) { }

    getUsers(): Promise<IUsers> {
        return this.apiAccess.getUsers();
    }
}