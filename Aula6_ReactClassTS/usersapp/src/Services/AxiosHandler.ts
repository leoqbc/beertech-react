import axios from "axios";

import IAPIHandler from "../Interfaces/IAPIHandler";
import IUsers from "../Interfaces/IUsers";

export default class AxiosHandler implements IAPIHandler {
    getUsers(): Promise<IUsers> {
        return axios.get<null, IUsers>("https://jsonplaceholder.typicode.com/users");
    }
}