export default interface IAnimal {
    id: number;
    name: string;
    type: "dog" | "cat";
    ownerId: number;
}