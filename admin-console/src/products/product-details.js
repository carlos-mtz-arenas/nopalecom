import { LitElement, html } from 'lit';


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
      <form @submit=${this._onSubmit}>
        <md-filled-text-field
          name="sku"
          label="SKU"
          value="${this.product?.sku}"
        >
        </md-filled-text-field>
        <md-filled-text-field
          name="name"
          label="Nombre del producto"
          value="${this.product?.name}"
        >
        </md-filled-text-field>
        <md-filled-text-field
          name="description"
          label="Descripcion del producto"
          value="${this.product?.description}"
        >
        </md-filled-text-field>
        <md-filled-button type="submit">Guardar</md-filled-button>
      </form>
    `
  }

  async _onSumbmit(ev) {
    ev.preventDefault();

    const isCreate = Object.keys(this.product).length === 0;

  }

}

window.customElements.define('product-details', ProductDetails);
