import { LitElement, css, html } from 'lit';


export class NavMenu extends LitElement {

  static styles = css`
  :host {
    display: block;
    padding: 10px 20px;
    background-color: var(--ecom-color-primary);
    color: var(--ecom-color-text-primary);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  nav {
    position: sticky;
    top: 0;
    z-index: 1000;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    display: block;
    width: -webkit-fill-available;
  }

  a {
    color: var(--ecom-color-text-primary);
    display: block;
    padding: 17px;
    text-decoration: none;
    text-align: center;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    :host {
      padding: 10px 0;
    }

    ul {
      display: block;
    }
  }

  @media (min-width: 1200px) {
  }
  `;

  static get properties() {
    return {
      menuOpen: { type: Boolean, reflect: true },
    }
  };

  constructor() {
    super();
    this.menuOpen = false;
  }

  _onToggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
    <nav>
      <ul>
        <li>
          <a title="Stores" href="/stores"><md-icon>store</md-icon></a>
        </li>
        <li>
          <a title="Products" href="/products"><md-icon>storefront</md-icon></a>
        </li>
        <li>
          <a title="Inventory" href="#"><md-icon>inventory_2</md-icon></a>
        </li>
        <li>
          <a title="Users" href="#"><md-icon>group</md-icon></a>
        </li>
        <li>
          <a title="Settings" href="#"><md-icon>settings</md-icon></a>
        </li>
      </ul>
    </nav>
    `
  }

}

window.customElements.define('nav-menu', NavMenu);
