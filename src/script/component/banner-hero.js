import img from '../../img/banner-hero.png';

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
                background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${img});
                color: black;
                overflow: hidden;
                min-height: 335px;
            }
            .row{
              display:flex;
              flex-direction: row;
              padding: 5%;
            }
            .col{
              flex-basis: 100%;
              line-height: 60px;
              text-align: center;
              color:white;
            }
            .col h1{
              font-size: 50px;
            }
            .latestButton{
              border-radius: 5px;
              background-color: #07c3e0;
              color: white;
              padding: 10px;
              border: none;
              font-size: 16px;
              text-decoration:none;
            }
            .favoriteButton{
              border-radius: 5px;
              background-color: #de8d00;
              color: white;
              padding: 10px;
              border: none;
              margin-left: 5px;
              font-size: 16px;
              text-decoration:none;
            }
        </style>

        <div class="row">
            <div class="col">
              <h1>Find Favorite Movies</h1>
              <p>Easiest Find and Keep Your Favorite Movie with RAP_Movie</p>
              <div>
                <a class="latestButton" href="#upcoming">Upcoming</a>
                <a class="favoriteButton href="#popular">Popular</a>
              </div>
            </div>
        </div>
      `;
    }
  }
   
  customElements.define('banner-hero', BannerHero);