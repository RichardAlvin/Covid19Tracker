class MovieFooter extends HTMLElement {
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
                color:white;
            }
            :host {
                display: block;
                background-color:#2d8a46;
                color: black;
                overflow: hidden;
                min-height: 100px;
                text-align:center;
            }

            :host p{
                font-size:16px;
                padding-top:15px;
                padding-bottom: 20px;
            }

            :host h3{
                padding-top: 10px;
            }

        </style>

        <p>Contact Us: rap.movie@gmail.com</p><hr>
        <h3>@Copyright 2022, RAP_Movie</h3>
      `;
    }
  }
   
  customElements.define('movie-footer', MovieFooter);