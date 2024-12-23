import { LitElement, css, html } from 'lit';


export class UserProfileNav extends LitElement {
  static properties = {
    userName: {
      attribute: 'user-name',
      type: String,
      reflect: true
    },
  };

  static styles = css`
    :host {
      display: block;
      text-align: center;
      padding: 1em;
    }

    div {
      display: none;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      :host {
        display: block;
        text-align: center;
        border-bottom: 1px solid grey;
        padding-bottom: 1em;
        margin-bottom: 1em;
      }

      div {
        display: block;
        margin-top: 7px;
      }
    }

    @media (min-width: 1200px) {
    }
  `;

  constructor() {
    super();
    this.userName = '';
  }

  render() {
    return html`
      <md-icon>account_circle</md-icon>
      <div>${this.userName}</div>
    `
  }

}

window.customElements.define('user-profile-nav', UserProfileNav);
