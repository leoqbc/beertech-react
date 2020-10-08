import RenderableComponent from "../interfaces/RenderableComponent";

export default class DOMRender {
    static render(component: RenderableComponent, selector: HTMLElement | null) {
        if (selector === null) {
            throw new Error("selector null");
        }

        selector.innerHTML = component.render();
    }
}