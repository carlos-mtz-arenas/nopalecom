import { LitElement, css, html } from 'lit';

import { getMessage } from '@core/lang/get-message';
import { getStoreById } from '@stores/handlers/get-store-details';
import { Router } from '@vaadin/router';
import { showSnack } from '@core/handlers/show-snack';


export class EditStorePage extends LitElement {
  static get properties() {
    return {
      store: { type: Object },
      location: { type: Object },
    }
  }

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

  constructor() {
    super();

    this.store = {};
  }

  async firstUpdated() {
    try {
      const details = await getStoreById(this.location.params.uuid);
      this.store = { ...details };
    } catch (err) {
      console.error(`Error while pulling details for store [${this.location.params.uuid}]`, err);
      // TODO handle error
    }
  }

  render() {
    return html`
      <h1>${getMessage('stores.page.editStore')} ${this.store?.uuid}</h1 >
      <!-- TODO handle the case in which we're still loading the info -->
      <form @submit=${this._onSumbmit}>
        <md-outlined-text-field
          name="name"
          label="${getMessage('stores.attrs.name')}"
          required
          value=${this.store?.name}
        >
        </md-outlined-text-field>
        <md-outlined-text-field
          name="address"
          label="${getMessage('stores.attrs.address')}"
          required
          value=${this.store?.address}
        >
        </md-outlined-text-field>
        <!-- TODO change this for a checkbox instead -->
        <md-outlined-text-field
          name="enabled"
          label="${getMessage('stores.attrs.isEnabled')}"
          value=${this.store?.isEnabled}
        >
        </md-outlined-text-field>
        <section class="actions">
          <md-filled-button type="submit">${getMessage('generic.save')}</md-filled-button>
          <md-outlined-button type="cancel" @click=${this._onCancel}>${getMessage('generic.cancel')}</md-outlined-button>
        </section>
      </form>
    `;
  }

  _onCancel(ev) {
    ev.preventDefault();

    Router.go('/stores');
  }


  async _onSumbmit(ev) {
    ev.preventDefault();

    await showSnack({
      dispatchEvent: (event) => this.dispatchEvent(event),
      msg: getMessage('generic.changes.saved'),
    });

    Router.go('/stores');
  }

}

window.customElements.define('edit-store-page', EditStorePage);
