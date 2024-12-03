import { LitElement, css, html } from 'lit';


export class StoresPage extends LitElement {
  static styles = css`
  `;

  render() {
    return html`
      <h1>stores page</h1>
    `
  }

}


window.customElements.define('stores-page', StoresPage);
