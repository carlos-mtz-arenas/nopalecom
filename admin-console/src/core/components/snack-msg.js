import { LitElement, html } from 'lit';


export class SnackMsg extends LitElement {

  render() {
    return html`
the snack msg
    `
  }

}

window.customElements.define('snack-msg', SnackMsg);
