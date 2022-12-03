import img from '../../img/banner-hero.png';

class SearchBar extends HTMLElement {
    constructor() {
      super();
      this.shadowDOM = this.attachShadow({mode: 'open'});
    }
   
    connectedCallback(){
      this.render();
    }
   
    set clickEvent(event) {
      this._clickEvent = event;
      this.render();
    }
   
    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }
   
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin-top: 30px;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${img});
            color: white;
            overflow: hidden;
            min-height: 200px;
        }
          .search-container{
            display:flex;
            justify-content:center;
            margin-bottom:50px;
          }
          input[type=search] {
            padding: 6px;
            margin-top: 8px;
            font-size: 17px;
            border: none;
          }
          .search-container button {
            float: right;
            padding: 6px 10px;
            margin-top: 8px;
            margin-right: 16px;
            background: #ddd;
            font-size: 17px;
            border: none;
            cursor: pointer;
          }
        </style>
          <center><h1>Search Movie</h1></center>
          <div id="search-container" class="search-container">
              <input type="search" placeholder="Find Name of Movie" id="searchElement">
              <button id="searchButtonElement" class="searchButton" type="submit">Search</button>
          </div>
      `;
   
      this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
  }
   
  customElements.define('search-bar', SearchBar);