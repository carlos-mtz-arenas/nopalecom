import { LitElement, css, html } from 'lit';
import { getMessage } from '@core/lang/get-message';

import responsiveTable from '@core/components/responsive-table-css';

export class ProductSearchResults extends LitElement {
  static styles = [
    responsiveTable,
    css`
    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
    }

    @media (min-width: 1200px) {
    }
  `];

  static get properties() {
    return {
      searchResults: {
        attribute: 'search-results',
        type: Array,
        reflect: true
      },
    }
  }

  constructor() {
    super();
    this.searchResults = [];
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>${getMessage('products.attrs.sku')}</th>
            <th>${getMessage('products.attrs.name')}</th>
            <th>${getMessage('products.attrs.brand')}</th>
            <th>${getMessage('products.attrs.isEnabled')}</th>
            <th>${getMessage('products.resultsTable.thead.actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.searchResults.map(result =>
      html`<tr>
            <td>${result.sku}</td>
            <td>${result.name}</td>
            <td>${result.brand}</td>
            <td>${result.isEnabled ? 'si' : 'no'}</td>
            <td>
              <md-icon-button
                @click=${() => this._onClick(result.uuid)}
                aria-label="detalles del producto ${result.name}"
              >
                <md-icon>details</md-icon>
              </md-icon-button>
            </td>
          </tr>`)
      }
        </tbody>
      </table >
      ${this.searchResults.length === 0 ? html`<strong>${getMessage('products.resultsTable.noResults')}</strong>` : null}
  `;
  }

  _onClick(uuid) {
    const selectedEvent = new CustomEvent('product-result-selected', {
      detail: uuid,
    });

    this.dispatchEvent(selectedEvent);
  }

}

window.customElements.define('product-search-results', ProductSearchResults);
