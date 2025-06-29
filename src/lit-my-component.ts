import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";


@customElement("lit-my-component")
export class LitMyComponent extends LitElement {

    static styles = css`
        p {
            color: limegreen;
        }

        button {
            border-radius: 8px;
            border: 1px solid transparent;
            padding: 0.6em 1.2em;
            font-size: 1em;
            font-weight: 500;
            font-family: inherit;
            background-color: #1a1a1a;
            cursor: pointer;
            transition: border-color 0.25s;
        }

        button:hover {
            border-color: #646cff;
        }

        button:focus,
        button:focus-visible {
            outline: 4px auto -webkit-focus-ring-color;
        }
    `

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