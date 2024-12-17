import { LitElement, css, html } from 'lit';

export class CrudLayout extends LitElement {

  static styles = css`
    .title {
      margin-bottom: 50px;
    }

    .search-results {
      margin-top: 50px;
      background-color: white;
      padding: 1em;
      border-radius: 10px;
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

      .search-results {
        padding: 2em;
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
      <div class="search-results">
        <slot name="results"></slot>
      </div>
    `
  }


}

window.customElements.define('crud-layout', CrudLayout);
