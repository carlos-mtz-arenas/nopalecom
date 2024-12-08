import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import { getMessage } from '@core/lang/get-message';
import { createProduct } from '@products/handlers/create-product';
import { showSnack } from '@core/handlers/show-snack';


export class CreateProductPage extends LitElement {

  render() {
    return html`
      <h1>${getMessage('products.page.newProduct')}</h1>
      <form @submit=${this._onSumbmit}>
        <md-outlined-text-field
          name="sku"
          label="${getMessage('products.attrs.sku')}"
          required
          value="${this.product?.sku}"
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="name"
          label="${getMessage('products.attrs.name')}"
          required
          value="${this.product?.name}"
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="description"
          label="${getMessage('products.attrs.description')}"
          value="${this.product?.description}"
        >
        </md-outlined-text-field>
        <md-filled-button type="submit">${getMessage('generic.save')}</md-filled-button>
      </form>
    `
  }

  async _onSumbmit(ev) {
    ev.preventDefault();

    try {
      const formData = new FormData(ev.target)
      const dataValues = Object.fromEntries(formData);

      const { uuid } = await createProduct(dataValues);

      await showSnack({
        dispatchEvent: (event) => this.dispatchEvent(event),
        msg: getMessage('generic.saves.saved', [uuid]),
      });

      Router.go('/products');
    } catch (err) {
      console.error('Error while creating a new product', err);
      // TODO handle the error
    }
  }

}

window.customElements.define('create-product-page', CreateProductPage);
