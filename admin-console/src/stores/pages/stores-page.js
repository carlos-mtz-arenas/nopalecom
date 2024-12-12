import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import { getMessage } from '@core/lang/get-message';
import { searchStores } from '@stores/handlers/search-stores';


export class StoresPage extends LitElement {

  connectedCallback() {
    super.connectedCallback();

    this.fetchExistingStores();
  }

  render() {
    return html`
      <crud-layout>
        <h1 slot="title" class="title">${getMessage('stores.page.title')}</h1>
        <md-filled-button @click=${this._onNewStoreClick} slot="title">${getMessage('stores.page.newStore')}</md-filled-button>
        <store-search-results
          class="results"
          slot="results"
          @store-result-selected=${this._onStoreSelected}
        >
        </store-search-results>
      </crud-layout>
    `
  }

  async _onNewStoreClick() {
    Router.go(`/stores/create`);
  }

  async fetchExistingStores() {

    try {
      const results = await searchStores();
      const resultsArea =
        this.renderRoot.querySelector('store-search-results');

      resultsArea.setAttribute('search-results', JSON.stringify(results));
    } catch (err) {
      console.error('Error while fetching stores', err);
      // TODO handle error
    }
  }

  async _onStoreSelected(ev) {
    const store = ev.detail;

    Router.go(`/stores/${store}`);
  }

}

window.customElements.define('stores-page', StoresPage);
