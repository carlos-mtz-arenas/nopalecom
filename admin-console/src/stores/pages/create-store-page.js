import { LitElement, css, html } from 'lit';
import { Router } from '@vaadin/router';

import { getMessage } from '@core/lang/get-message';
import { createStore } from '@stores/handlers/create-store';
import { showSnack } from '@core/handlers/show-snack';


export class CreateStorePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    section.actions {
      display: block;
    }

    md-outlined-text-field {
      width: -webkit-fill-available;
      margin: 17px 0;
    }

    section.actions md-filled-button {
      margin: 17px 0 0 0;
      width: -webkit-fill-available;
    }

    section.actions md-outlined-button {
      margin: 17px 0;
      width: -webkit-fill-available;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      section.actions {
        text-align: right;
      }

      section.actions md-filled-button {
        width: initial;
      }

      section.actions md-outlined-button {
        width: initial;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  render() {
    return html`
      <h1>${getMessage('stores.page.newStore')}</h1>
      <form @submit=${this._onSumbmit}>
        <md-outlined-text-field
          name="name"
          label="${getMessage('stores.attrs.name')}"
          required
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="address"
          label="${getMessage('stores.attrs.address')}"
          required
        >
        </md-outlined-text-field>
        <!-- TODO change this for a checkbox instead -->
        <md-outlined-text-field
          name="enabled"
          label="${getMessage('stores.attrs.isEnabled')}"
        >
        </md-outlined-text-field>
        <section class="actions">
          <md-filled-button type="submit">${getMessage('generic.save')}</md-filled-button>
          <md-outlined-button type="cancel" @click=${this._onCancel}>${getMessage('generic.cancel')}</md-outlined-button>
        </section>
      </form>
    `
  }

  _onCancel(ev) {
    ev.preventDefault();

    Router.go('/stores');
  }

  async _onSumbmit(ev) {
    ev.preventDefault();

    try {
      const formData = new FormData(ev.target)
      const dataValues = Object.fromEntries(formData);

      const { uuid } = await createStore(dataValues);

      await showSnack({
        dispatchEvent: (event) => this.dispatchEvent(event),
        msg: getMessage('generic.saves.saved', [uuid]),
      });

      Router.go('/stores');
    } catch (err) {
      console.error('Error while creating a new store', err);
      // TODO handle the error
    }
  }

}

window.customElements.define('create-store-page', CreateStorePage);
