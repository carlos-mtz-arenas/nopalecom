import { LitElement, html } from 'lit';
import { searchProducts } from './handlers/search-products';
import { getProductDetails } from './handlers/get-product-details';


export class ProductsPage extends LitElement {

  render() {
    return html`
      <crud-template>
        <h1 slot="title" class="title">Productos</h1>
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
        <product-details
          class="item-details"
          slot="item-details"
        >
          details of the selected item
        </product-details>
      </crud-template>
    `
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
      // TODO: handle error
    }
  }

  async _onProductSelected(ev) {
    const selectedSku = ev.detail;

    try {
      const productDetails = await getProductDetails(selectedSku);
      const detailsArea =
        this.renderRoot.querySelector('product-details');

      detailsArea.setAttribute('product', JSON.stringify(productDetails));
    } catch (err) {
      console.error(`Error fetching product [${selectedSku}] details`, err);
      // TODO handle error
    }
  }

}

window.customElements.define('products-page', ProductsPage);
