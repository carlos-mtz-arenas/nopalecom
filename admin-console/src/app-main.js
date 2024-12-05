import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { routes } from './app-router.js';


export class AppMain extends LitElement {
  static styles = css`
    :root {
    }

    main {
      width: 100%;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      :host {
        display: flex;
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
