import { LitElement, css, html } from 'lit';

import { getMessage } from '../core/lang/get-message.js';

export class CrudTemplate extends LitElement {

  static styles = css`
    :root {
    }

    .filters {
      margin: 50px 0;
      padding: 17px 0;
      border-bottom: 1px solid #cac4d0;
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
      <div class="filters">
        <slot name="filters"></slot>
      </div>
      <h2>${getMessage('generic.searchResults')}</h2>
      <slot name="results"></slot>
      <slot name="item-details"></slot>
    `
  }


}

window.customElements.define('crud-template', CrudTemplate);
