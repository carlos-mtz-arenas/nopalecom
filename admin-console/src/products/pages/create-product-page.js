import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { getMessage } from '@core/lang/get-message';
import { createProduct } from '@products/handlers/create-product';
import { showSnack } from '@core/handlers/show-snack';


export class CreateProductPage extends LitElement {
  static styles = css`
    section.actions {
      display: block;
    }

    md-outlined-text-field {
      width: -webkit-fill-available;
      margin: 17px 0;
    }

    section.actions md-filled-button {
      margin: 17px 0 0 0;
      width: -webkit-fill-available;
    }

    section.actions md-outlined-button {
      margin: 17px 0;
      width: -webkit-fill-available;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      section.actions {
        text-align: right;
      }

      section.actions md-filled-button {
        width: initial;
      }

      section.actions md-outlined-button {
        width: initial;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  render() {
    return html`
      <form-page-layout>
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
          <md-outlined-text-field
            type="number"
            min="1"
            step="any"
            name="price"
            label="${getMessage('products.attrs.price')}"
            value="${this.product?.price}"
            required
          >
          </md-outlined-text-field>
          <section class="actions">
            <md-filled-button type="submit">${getMessage('generic.save')}</md-filled-button>
            <md-outlined-button type="cancel" @click=${this._onCancel}>${getMessage('generic.cancel')}</md-outlined-button>
          </section>
        </form>
      </form-page-layout>
    `
  }

  _onCancel(ev) {
    ev.preventDefault();

    Router.go('/products');
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
