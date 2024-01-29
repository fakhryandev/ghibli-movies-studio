class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box 
        }
        :host{
            display: block;
            background-color: #3a2d5c;
            text-align: center;
        }
        h2{
            padding: 10px;
            color: #fff;
            font-family: 'Poppins', sans-serif
        }
    </style>
    <h2>Studio Ghibli Films</h2>
    `;
  }
}

customElements.define('app-bar', AppBar);
