import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import { searchProducts } from '@products/handlers/search-products';
import { getMessage } from '@core/lang/get-message';


export class ProductsPage extends LitElement {

  render() {
    return html`
      <crud-template>
        <h1 slot="title" class="title">${getMessage('products.page.title')}</h1>
        <md-filled-button @click=${this._onNewProductClick} slot="title">${getMessage('products.page.newProduct')}</md-filled-button>
        <products-filters
          slot="filters"
          @product-search-operation=${this._onProductSearchOperation}
        >
        </products-filters>
        <product-search-results
          class="results"
          slot="results"
          @product-result-selected=${this._onProductSelected}
        >
        </product-search-results>
      </crud-template>
    `
  }

  async _onNewProductClick() {
    Router.go(`/products/create`);
  }

  async _onProductSearchOperation(ev) {
    const filters = ev.detail;

    try {
      const results = await searchProducts(filters);
      const resultsArea =
        this.renderRoot.querySelector('product-search-results');

      resultsArea.setAttribute('search-results', JSON.stringify(results));
    } catch (err) {
      console.error('Error while fetching products', err);
      // TODO handle error
    }
  }

  async _onProductSelected(ev) {
    const product = ev.detail;

    Router.go(`/products/${product}`);
    // TODO redirect to update-product
  }

}

window.customElements.define('products-page', ProductsPage);
