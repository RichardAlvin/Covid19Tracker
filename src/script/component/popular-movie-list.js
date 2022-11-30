import './movie-item.js';
 
class PopularMovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }

  set movies(movies){
    this._movies = movies;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
      <style>
        :host{
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          flex-flow: wrap;
        }
      </style>
    `;

    let i = 0;

    this._movies.forEach(movie =>{
      if(i == 4) return;
      const movieItemElement = document.createElement('movie-item');
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
      i++;
    });
  }
}
 
customElements.define('popular-movie-list', PopularMovieList);