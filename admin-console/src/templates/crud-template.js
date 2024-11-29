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
      div.crud-page {
        width: 90%;
        margin: 0 auto;
      }
    }

    @media (min-width: 1200px) {
      div.crud-page {
        width: 80%;
      }
    }
  `;

  render() {
    return html`
      <div class="crud-page">
        <slot name="title"></slot>
        <slot name="filters"></slot>
        <slot name="results"></slot>
        <slot name="item-details"></slot>
      </div>
    `
  }


}

window.customElements.define('crud-template', CrudTemplate);
