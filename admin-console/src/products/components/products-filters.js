import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { getMessage } from '@core/lang/get-message';


export class ProductsFilters extends LitElement {
  static styles = css`
    section form md-filled-button {
      margin-left: 17px;
    }

    section form {
      display: inline-flex;
      margin-left: 17px;
    }

    md-outlined-text-field {
      width: -webkit-fill-available;
      margin: 10px 0;
    }

    md-filled-button {
      margin: 17px 0;
    }

    @media (min-width: 576px) {
      section md-filled-button.new-product {
        float: right;
      }
    }

    @media (min-width: 768px) {
      md-outlined-text-field {
        display: block;
        width: 70%;
      }
    }

    @media (min-width: 992px) {
      md-outlined-text-field {
        width: 60%;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  render() {
    return html`
      <section class="filters">
        <form @submit=${this._onSubmit}>
          <md-outlined-text-field name="term" label="${getMessage('generic.search')}">
          </md-outlined-text-field>
          <md-filled-button type="submit">${getMessage('generic.search')}</md-filled-button>
        </form>
        <md-filled-button class="new-product" @click=${this._onNewProductClick}>${getMessage('products.page.newProduct')}</md-filled-button>
      </section>
    `
  }

  async _onNewProductClick() {
    Router.go(`/products/create`);
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
