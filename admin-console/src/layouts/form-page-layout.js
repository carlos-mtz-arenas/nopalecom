import { LitElement, css, html } from 'lit';

export class FormPageLayout extends LitElement {

  static styles = css`
    :host {
      display: block;
    }

    ::slotted(form) {
      background-color: white;
      border: 1px solid white;
      border-radius: 10px;
      padding: 1em;
      margin-top: 50px;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      :host {
        margin: 0 auto;
      }

      ::slotted(form) {
        padding: 1em 2em;
      }
    }

    @media (min-width: 1200px) {
      :host {
      }
    }
  `;

  render() {
    return html`
      <slot></slot>
    `
  }


}

window.customElements.define('form-page-layout', FormPageLayout);
