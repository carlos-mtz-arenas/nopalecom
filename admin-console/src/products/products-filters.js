import { LitElement, css, html } from 'lit';
import { getMessage } from '../core/lang/get-message';


export class ProductsFilters extends LitElement {
  static styles = css`
    md-outlined-text-field {
      width: -webkit-fill-available;
      margin: 10px 0;
    }

    md-filled-button {
      margin: 17px 0;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
      md-outlined-text-field {
        display: block;
        width: 70%;
      }
    }

    @media (min-width: 992px) {
      md-outlined-text-field {
        width: 40%;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  render() {
    return html`
      <section class="filters">
        <form @submit=${this._onSubmit}>
          <md-outlined-text-field name="sku" label="${getMessage('products.attrs.sku')}">
          </md-outlined-text-field>
          <md-outlined-text-field name="name" label="${getMessage('products.filters.name')}">
          </md-outlined-text-field>
          <md-outlined-text-field name="description" label="${getMessage('products.filters.description')}">
          </md-outlined-text-field>
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
