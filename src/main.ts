
class CounterButton extends HTMLElement {
    shadow: ShadowRoot;
    button: HTMLButtonElement;
    count: number;

    constructor() {
        super();

        this.shadow = this.attachShadow({mode: "open"});
        this.shadow.innerHTML = `
        <div>
            <p>Hello from the shadow realm</p>
            <slot></slot>
        </div>`;


        this.button = this.querySelector('button')!;
        this.count = 0;

        console.log("Hello from the WebComponent", this, this.button);
        this.button.addEventListener('click', this.handleClick);
    }

    handleClick = () => {
        this.count += 1;
        this.button.textContent = `Clicked ${this.count} Times`;
    }

}

customElements.define('wc-count', CounterButton);
