import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";


@customElement("lit-counter")
export class LitCounter extends LitElement {

    @state()
    count = 0;

    protected render(): unknown {
        return html`
            <slot @click="${ this.onClick }"></slot>
            <p>You clicked ${ this.count } times!</p>
        `
    }

    onClick() {
        this.count++;
    }
}