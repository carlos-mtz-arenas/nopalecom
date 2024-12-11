import { LitElement, html, css } from 'lit';

class ExpansionPanel extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      overflow: hidden;
      margin: 0.5rem 0;
    }

    .header {
      background-color: #f5f5f5;
      padding: 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header:hover,
    .header:focus {
      background-color: #e0e0e0;
      outline: none;
    }

    .header span {
      font-size: 1rem;
      font-weight: bold;
    }

    .icon {
      font-size: 1.5rem;
      transition: transform 0.3s ease-in-out;
    }

    .icon[open] {
      transform: rotate(180deg);
    }

    .content {
      overflow: hidden;
      height: 0;
      transition: height 0.3s ease-in-out;
    }

    .content[open] {
      height: auto;
      padding: 1rem;
    }
  `;

  static properties = {
    open: { type: Boolean, reflect: true },
    header: { type: String },
  };

  constructor() {
    super();
    this.open = false;
    this.header = '';
  }

  toggle() {
    this.open = !this.open;

    const content = this.shadowRoot.querySelector('.content');

    if (this.open) {
      content.style.height = `${content.scrollHeight}px`;

      setTimeout(() => {
        content.style.height = 'auto';
      }, 300);

    } else {
      content.style.height = `${content.scrollHeight}px`;

      setTimeout(() => {
        content.style.height = '0';
      }, 10);

    }
  }

  _onKeydown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
    }
  }

  render() {
    return html`
      <div
        class="header"
        tabindex="0"
        role="button"
        aria-expanded="${this.open}"
        aria-controls="panel-content"
        @click=${this.toggle}
        @keydown=${this._onKeydown}
      >
        <span>${this.header}</span>
        <span class="icon" ?open=${this.open}>⌄</span>
      </div>
      <div
        id="panel-content"
        class="content"
        ?open=${this.open}
        role="region"
        aria-hidden="${!this.open}"
      >
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define('expansion-panel', ExpansionPanel);
