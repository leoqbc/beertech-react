import RenderableComponent from "../interfaces/RenderableComponent";

export default class List implements RenderableComponent {
    render() : string {
        return `
        <ul>
            <li>
                Leonardo
            </li>
            <li>
                Pedro
            </li>
            <li>
                Carla
            </li>
        </ul>
        `;
    }

}