import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { routes } from './app-router.js';

import { sessionHandler } from './core/handlers/session-handler';


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

  static properties = {
    isLoggedIn: {
      type: Boolean,
      reflect: true,
    },

    userInfo: {
      type: Object,
      reflect: true,
    },
  };

  constructor() {
    super();

    this.isLoggedIn = sessionHandler.isSessionValid();
    this.userInfo = {};

    if (this.isLoggedIn) {
      this.userInfo = { ...sessionHandler.user() };
    }
  }

  firstUpdated() {
    this.router = new Router(this.shadowRoot.querySelector('main'));
    this.router.setRoutes(routes);

    if (!this.isLoggedIn) {
      Router.go('/login');
    } else if (window.location.pathname === '/login') {
      Router.go('/products');
    }
  }

  getNavMenu() {
    if (!this.isLoggedIn) {
      return null;
    }

    return html`<nav-menu user-name=${this.userInfo.name}></nav-menu>`;
  }

  _onLoginSuccess(ev) {
    this.isLoggedIn = true;
    this.userInfo = ev.detail;
    Router.go('/products');
  }

  _onLogout() {
    this.isLoggedIn = false;
    this.userInfo = {};
    Router.go('/login');
  }

  render() {
    return html`
      ${this.getNavMenu()}
      <main
        @user-login-success=${this._onLoginSuccess}
        @user-logout-success=${this._onLogout}
      >
      </main>
    `;
  }

}

window.customElements.define('app-main', AppMain);
