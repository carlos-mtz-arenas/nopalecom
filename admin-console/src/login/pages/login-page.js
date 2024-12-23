import { LitElement, css, html } from 'lit';

import { authenticate } from '../handlers/authenticate';
import { getMessage } from '@core/lang/get-message';
import { sessionHandler } from '@core/handlers/session-handler';
import { Router } from '@vaadin/router';


export class LoginPage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    form {
      background-color: white;
      border: 1px solid white;
      border-radius: 10px;
      padding: 1em;
      margin-top: 50px;
    }

    form md-outlined-text-field {
      width: -webkit-fill-available;
      margin: 1em 0;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
      :host {
        width: 80%;
        margin: 0 auto;
      }
    }

    @media (min-width: 992px) {
      :host {
        width: 60%;
        margin: 0 auto;
      }

    }

    @media (min-width: 1200px) {
      :host {
        width: 40%;
        max-width: 500px;
      }
    }
  `;

  render() {
    return html`
      <h1>${getMessage('login.title')}</h1>
      <form @submit=${this._onSubmit}>
        <md-outlined-text-field
          name="username"
          type="email"
          placeholder="user@example.com"
          required
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="password"
          type="password"
          placeholder="user@example.com"
          required
        >
        </md-outlined-text-field>
        <md-filled-button type="submit">${getMessage('login.button')}</md-filled-button>
      </form>
    `
  }

  async _onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target)
    const dataValues = Object.fromEntries(formData);

    try {
      const data = await authenticate(dataValues);
      sessionHandler.persist(data);

      const selectedEvent = new CustomEvent('user-login-success', {
        detail: { user: data.user },
        bubbles: true,
      });

      this.dispatchEvent(selectedEvent);
    } catch (err) {
      console.error('Error while trying to login', err);
      // TODO: properly show an error
    }
  }

}

window.customElements.define('login-page', LoginPage);
