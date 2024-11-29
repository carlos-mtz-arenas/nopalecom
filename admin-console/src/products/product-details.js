import { LitElement, html } from 'lit';
import { getMessage } from '../core/lang/get-message';


export class ProductDetails extends LitElement {
  static get properties() {
    return {
      product: {
        attribute: 'product',
        type: Object,
        reflect: true
      },
    }
  }

  constructor() {
    super();
    this.product = {};
  }

  render() {
    return html`
      <form @submit=${this._onSumbmit}>
        <md-filled-text-field
          name="sku"
          label="${getMessage('products.attrs.sku')}"
          value="${this.product?.sku}"
        >
        </md-filled-text-field>
        <md-filled-text-field
          name="name"
          label="${getMessage('products.attrs.name')}"
          value="${this.product?.name}"
        >
        </md-filled-text-field>
        <md-filled-text-field
          name="description"
          label="${getMessage('products.attrs.name')}"
          value="${this.product?.description}"
        >
        </md-filled-text-field>
        <md-filled-button type="submit">${getMessage('generic.save')}</md-filled-button>
      </form>
    `
  }

  _onSumbmit(ev) {
    ev.preventDefault();

    const isCreate = Object.keys(this.product).length === 0;
    console.log('deducting', isCreate ? 'creating' : 'updating');
  }

}

window.customElements.define('product-details', ProductDetails);
