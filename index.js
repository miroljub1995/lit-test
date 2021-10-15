import { LitElement, html } from 'lit';

class MyElement extends LitElement {

  static properties = {
    name: {},
  };

  constructor(...args) {
    super(...args)
    fetch("https://reqres.in/api/products/3")
      .then(res => res.json())
      .then(res => res.data)
      .then(data => {
        console.log("data", data);
        this.name = data.id;
      });
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="red">Hello from MyElement! <my-element2 elem="${this.name}"></my-element2></div>
    `;
  }
}
customElements.define('my-element', MyElement);


class MyElement2 extends LitElement {

  createRenderRoot() {
    return this;
  }

  static get properties() {
    return {
      elem: {
        type: String,
        reflect: true
      }
    };
  }


  render() {
    return html`
      <div class="blue">${this.elem}</div>
    `;
  }
}
customElements.define('my-element2', MyElement2);