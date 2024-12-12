import { LitElement, css, html } from 'lit';
import { getMessage } from '@core/lang/get-message';


export class StoreSearchResults extends LitElement {
  static styles = css`
    table {
      width: 100%;
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
    }

    thead {
      color: rgb(0 0 0 / 90%);
    }

    thead tr {
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }

    tr {
      display: table-row;
      vertical-align: inherit;
      unicode-bidi: isolate;
      border-color: inherit;
    }

    td, th {
      padding: 15px 10px;
      display: table-cell;
      text-align: left;
      vertical-align: middle;
      border-radius: 2px;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      unicode-bidi: isolate;
      border-color: inherit;
    }

    md-filled-button {
      margin: 27px 0;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      md-filled-text-field {
        display: block;
        width: 70%;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

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
            <th>${getMessage('stores.attrs.name')}</th>
            <th>${getMessage('stores.attrs.address')}</th>
            <th>${getMessage('stores.attrs.isEnabled')}</th>
            <th>${getMessage('stores.resultsTable.thead.actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${this.searchResults.map(result =>
      html`<tr>
            <td>${result.name}</td>
            <td>${result.address}</td>
            <td>${result.isEnabled ? 'si' : 'no'}</td>
            <td>
              <md-icon-button
                @click=${() => this._onClick(result.uuid)}
                aria-label="See details for store: ${result.name}"
              >
                <md-icon>details</md-icon>
              </md-icon-button>
            </td>
          </tr>`)
      }
        </tbody>
      </table >
      ${this.searchResults.length === 0 ? html`<strong>${getMessage('stores.resultsTable.noResults')}</strong>` : null}
  `;
  }

  _onClick(uuid) {
    const selectedEvent = new CustomEvent('store-result-selected', {
      detail: uuid,
    });

    this.dispatchEvent(selectedEvent);
  }

}

window.customElements.define('store-search-results', StoreSearchResults);
