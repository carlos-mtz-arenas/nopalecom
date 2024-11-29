import { LitElement, css, html } from 'lit';
import { getMessage } from '../core/lang/get-message';


export class ProductsFilters extends LitElement {
  static styles = css`
    md-filled-text-field {
      width: -webkit-fill-available;
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

  render() {
    return html`
      <section class="filters">
        <form @submit=${this._onSubmit}>
          <md-filled-text-field name="sku" label="${getMessage('products.attrs.sku')}">
          </md-filled-text-field>
          <md-filled-text-field name="name" label="${getMessage('products.filters.name')}">
          </md-filled-text-field>
          <md-filled-text-field name="description" label="${getMessage('products.filters.description')}">
          </md-filled-text-field>
          <md-filled-button type="submit">${getMessage('generic.search')}</md-filled-button>
        </form>
      </section>
    `
  }

  _onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const dataValues = Object.fromEntries(formData);

    const searchEvent = new CustomEvent('product-search-operation', {
      detail: {
        ...dataValues
      }
    });
    this.dispatchEvent(searchEvent);
  }
}


window.customElements.define('products-filters', ProductsFilters);
