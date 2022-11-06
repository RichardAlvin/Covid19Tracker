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
                /*background-image: img;*/
                background-color: lightgrey;
                color: black;
                overflow: hidden;
                min-height: 350px;
            }
            .row{
              display:flex;
              flex-direction: row;
              padding: 5%;
            }
            .col-left{
              flex-basis: 60%;
              line-height: 50px;
            }
            .col-right{
              flex-basis: 40%;
            }
            .latestButton{
              border-radius: 5px;
              background-color: #07c3e0;
              color: white;
              padding: 10px;
              border: none;
            }
            .favoriteButton{
              border-radius: 5px;
              background-color: #de8d00;
              color: white;
              padding: 10px;
              border: none;
              margin-left: 5px;
            }
        </style>

        <div class="row">
            <div class="col-left">
              <h1>Find Favorite <br>Movies</h1>
              <p>Easiest Store Your Favorite Movie with RAP_Movie</p>
              <div>
                <button class="latestButton">Latest</button>
                <button class="favoriteButton">Favorite</button>
              </div>
            </div>
            <div class="col-right">
            </div>
        </div>
      `;
    }
  }
   
  customElements.define('banner-hero', BannerHero);