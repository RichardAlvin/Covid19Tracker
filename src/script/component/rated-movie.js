//import './favorite-item.js';
 
class RatedMovie extends HTMLElement {
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
        :host {
          color: black;
        }
      </style>

      <h1>Rated Movie</h1>
    `;
    // this._clubs.forEach(club => {
    //   const clubItemElement = document.createElement('club-item');
    //   clubItemElement.club = club;
    //   this.shadowDOM.appendChild(clubItemElement);
    // });
  }
}
 
customElements.define('rated-movie', RatedMovie);