import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { routes } from './app-router.js';


export class AppMain extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      transition: all 0.5s ease-in-out;
    }

    nav-menu {
      flex-shrink: 0;
      transition: all 0.5s ease-in-out;
    }

    main {
      width: -webkit-fill-available;
      background-color: var(--ecom-color-bg);
      padding: 17px 1em;
      flex-grow: 1;
      transition: all 0.5s ease-in-out;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      :host {
        flex-direction: row;
      }

      nav-menu {
        max-width: 20%;
        padding: 2em 1.5em;
      }

      main {
        padding: 0 3em;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  firstUpdated() {
    this.router = new Router(this.shadowRoot.querySelector('main'));
    this.router.setRoutes(routes);
  }

  render() {
    return html`
      <nav-menu></nav-menu>
      <main></main>
    `;
  }

}

window.customElements.define('app-main', AppMain);
