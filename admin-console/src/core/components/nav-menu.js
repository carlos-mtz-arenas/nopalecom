import { LitElement, css, html } from 'lit';


export class NavMenu extends LitElement {

  static styles = css`
  :host {
    display: block;
    padding: 10px 20px;
    background-color: var(--ecom-color-primary);
    color: var(--ecom-color-text-primary);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
  }

  a {
    color: var(--ecom-color-text-primary);
    display: block;
    padding: 17px 10px;
    text-decoration: none;
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 992px) {
    :host {
      padding: 10px 0;
    }

    nav {
      width: calc(100% - var(--ecom-screen-padding-md));
      margin: 0 auto;
    }

    li {
      /*display: inline-block;*/
      margin-right: 10px;
    }
  }

  @media (min-width: 1200px) {
    nav {
      width: calc(100% - var(--ecom-screen-padding-lg));
      margin: 0 auto;
    }
  }
  `;

  render() {
    return html`
    <nav>
      <ul>
        <li>
          <a href="/stores">Tiendas</a>
        </li>
        <li>
          <a href="/products">Productos</a>
        </li>
        <li>
          <a href="#">Inventarios</a>
        </li>
        <li>
          <a href="#">Usuarios</a>
        </li>
        <li>
          <a href="#">Configuraciones</a>
        </li>
        <li>
          <a href="#">Busqueda</a>
        </li>
      </ul>
    </nav>
    `
  }

}

window.customElements.define('nav-menu', NavMenu);
