import { LitElement, html } from "lit-element";

class Test extends LitElement {

    constructor() {
        super();
        return;
    }

    // Render element DOM by returning a `lit-html` template.
    render() {
        return html`     
        <p>test</p>
        `;
    }
}

customElements.define("test-test", Test);
export { Test };

