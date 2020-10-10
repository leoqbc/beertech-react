
interface Component {
    render(): string;
}

class ComponentList {
    protected components: Component[];

    constructor({ components }: { components: Component[] }) { 
        this.components = components; 
    }

    *[Symbol.iterator]() {
        for (const component of this.components) {
            yield component.render();
        }
    }
}

class List implements Component {
    constructor(
        protected name: string
    ) { }

    render(): string {
        return `<div>${this.name}</div>`;
    }
}

const componentList: ComponentList = new ComponentList({
    components: [
        new List("João"),
        new List("Pedro"),
        new List("Paula"),
        new List("Amanda")
    ]
});

for (const component of componentList) {
 console.log(component);
}