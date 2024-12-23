import { css } from 'lit';

export default css`
    :host {
      overflow-x: auto;
    }

    table {
      width: 100%;
      display: table;
      border-collapse: collapse;
      border-spacing: 0;
    }

    thead {
      color: rgb(0 0 0 / 90%);
    }

    thead tr {
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }

    tr {
      display: table-row;
      vertical-align: inherit;
      unicode-bidi: isolate;
      border-color: inherit;
    }

    td, th {
      padding: 1em 10px;
      display: table-cell;
      text-align: left;
      vertical-align: middle;
      border-radius: 2px;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      unicode-bidi: isolate;
      border-color: inherit;
    }

    md-filled-button {
      margin: 27px 0;
    }

    @media (min-width: 576px) {
    }

    @media (min-width: 768px) {
    }

    @media (min-width: 992px) {
      md-filled-text-field {
        display: block;
        width: 70%;
      }
    }

    @media (min-width: 1200px) {
    }
  `;


