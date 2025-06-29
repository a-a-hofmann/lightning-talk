import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";


@customElement("lit-my-component")
export class LitMyComponent extends LitElement {

    @state()
    count = 0;

    protected render() {
        return html`
            <button @click="${ this.onClick }">Lit me!</button>
            <p>You lit ${ this.count } times!</p>
        `;
    }

    onClick() {
        this.count++;
    }
}