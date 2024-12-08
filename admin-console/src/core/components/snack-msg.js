import { LitElement, css, html } from 'lit';


export class SnackMsg extends LitElement {
  static get properties() {
    return {
      message: { type: String, reflect: true },
    }
  }

  static styles = css`
    :host {
      display: block;
      position: fixed;
      bottom: 1rem;
      left: 50%;
      background-color: var(--ecom-color-bg-dark);
      border-radius: 3px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      padding: 1em;
      font-size: 1em;
      transform: translateX(-50%);
    }
  `;

  constructor() {
    super();
    this.message = '';
  }

  render() {
    return html`<div>${this.message}</div>`
  }

}

window.customElements.define('snack-msg', SnackMsg);
