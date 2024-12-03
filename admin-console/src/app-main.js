import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import { routes } from './app-router.js';


export class AppMain extends LitElement {

  constructor() {
    super();
  }

  firstUpdated() {
    super.connectedCallback();
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
