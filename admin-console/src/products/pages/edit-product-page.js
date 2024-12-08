import { LitElement, css, html } from 'lit';

import { getMessage } from '@core/lang/get-message';
import { getProductDetailsById } from '@products/handlers/get-product-details';
import { Router } from '@vaadin/router';
import { showSnack } from '@core/handlers/show-snack';


export class EditProductPage extends LitElement {
  static get properties() {
    return {
      product: { type: Object },
      location: { type: Object },
    }
  }

  static styles = css`
    md-outlined-text-field {
      width: 100%;
      margin: 17px 0;
    }

    md-filled-button {
      margin-top: 17px;
      float: right;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
    }

    @media (min-width: 1200px) {
    }
  `;

  constructor() {
    super();

    this.product = {};
  }

  async firstUpdated() {
    try {
      const details = await getProductDetailsById(this.location.params.uuid);
      this.product = { ...details };
    } catch (err) {
      console.error(`Error while pulling details for product [${this.location.params.uuid}]`, err);
      // TODO handle error
    }
  }

  render() {
    return html`
      <h1>${getMessage('products.page.editProduct')} ${this.product.uuid}</h1 >
      <!-- TODO handle the case in which we're still loading the info -->
      <form @submit=${this._onSumbmit}>
        <md-outlined-text-field
          name="sku"
          label="${getMessage('products.attrs.sku')}"
          value="${this.product?.sku}"
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="name"
          label="${getMessage('products.attrs.name')}"
          value="${this.product?.name}"
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="description"
          label="${getMessage('products.attrs.description')}"
          value="${this.product?.description}"
        >
        </md-outlined-text-field>
        <md-filled-button type="submit">${getMessage('generic.saveChanges')}</md-filled-button>
      </form >
  `
  }

  async _onSumbmit(ev) {
    ev.preventDefault();

    await showSnack({
      dispatchEvent: (event) => this.dispatchEvent(event),
      msg: getMessage('generic.changes.saved'),
    });

    Router.go('/products');
  }

}

window.customElements.define('edit-product-page', EditProductPage);
