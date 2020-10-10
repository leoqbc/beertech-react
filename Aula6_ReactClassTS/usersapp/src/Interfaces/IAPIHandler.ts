import IUsers from "./IUsers";

export default interface IAPIHandler {
    getUsers(): Promise<IUsers>;
}