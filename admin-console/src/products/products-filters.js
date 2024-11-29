import { LitElement, css, html } from 'lit';


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
          <md-filled-text-field name="sku" label="SKU">
          </md-filled-text-field>
          <md-filled-text-field name="name" label="Nombre del producto">
          </md-filled-text-field>
          <md-filled-text-field name="description" label="Descripcion del producto">
          </md-filled-text-field>
          <md-filled-button type="submit">Buscar</md-filled-button>
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
