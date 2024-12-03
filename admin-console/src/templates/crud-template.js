import { LitElement, css, html } from 'lit';


export class CrudTemplate extends LitElement {

  static styles = css`
    :root {
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      :host {
        width: 90%;
        margin: 0 auto;
      }
    }

    @media (min-width: 1200px) {
      :host {
        width: 80%;
      }
    }
  `;

  render() {
    // TODO remove the crud-page wrapper as this will be exposed to the container
    return html`
      <slot name="title"></slot>
      <slot name="filters"></slot>
      <slot name="results"></slot>
      <slot name="item-details"></slot>
    `
  }


}

window.customElements.define('crud-template', CrudTemplate);
