import { LitElement, html } from 'lit';


export class LoginPage extends LitElement {

  render() {
    return html`
      <h1>Login Page</h1>
      <p>the login page content itself</p>
      <form @submit=${this._onSubmit}>
        <input name="username" type="email" placeholder="user@example.com" required></input>
        <input name="password" type="password" placeholder="user@example.com" required></input>
        <button type="submit">Iniciar Sesion</button>
      </form>
    `
  }

  _onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target)
    const dataValues = Object.fromEntries(formData);

    console.log(dataValues);
  }


}

window.customElements.define('login-page', LoginPage);
