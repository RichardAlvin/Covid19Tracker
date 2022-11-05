import './favorite-item.js';
 
class FavoriteList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }
 
  renderError(message) {
    this.shadowDOM.innerHTML = `
      <style>
        club-list > .placeholder {
          font-weight: lighter;
          color: rgba(0,0,0,0.5);
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
 
  render() {
    this.shadowDOM.innerHTML = '';
    this._clubs.forEach(club => {
      const clubItemElement = document.createElement('club-item');
      clubItemElement.club = club;
      this.shadowDOM.appendChild(clubItemElement);
    });
  }
}
 
customElements.define('favorite-list', FavoriteList);