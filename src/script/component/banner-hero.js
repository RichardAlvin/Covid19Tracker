class BannerHero extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    render() {
      this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                width: 100%;
                background-color: black;
                color: black;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                overflow: hidden;
            }
            h1{
                color:black;
            }
        </style>
        <h1>test</h1>
      `;
    }
  }
   
  customElements.define('banner-hero', BannerHero);