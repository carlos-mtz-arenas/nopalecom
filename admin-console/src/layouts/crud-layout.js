import { LitElement, css, html } from 'lit';

import { getMessage } from '../core/lang/get-message.js';

export class CrudLayout extends LitElement {

  static styles = css`
    :root {
    }

    .filters {
    }

    .title {
      margin-bottom: 50px;
    }

    .search-results {
      margin-top: 50px;
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
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="filters">
        <slot name="filters"></slot>
      </div>
      <div class="search-results">
        <h2>${getMessage('generic.searchResults')}</h2>
        <slot name="results"></slot>
        <slot name="item-details"></slot>
      </div>
    `
  }


}

window.customElements.define('crud-layout', CrudLayout);
