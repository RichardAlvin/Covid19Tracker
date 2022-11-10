class MovieItem extends HTMLElement{
    constructor(){
        super();
        this.ShadowDOM = this.attachShadow({mode: 'open'});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }
    
    render(){
        this.ShadowDOM.innerHTML = `
            <style>
                *{
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                .column{
                    float: left;
                    width: 25%;
                    padding: 0 10px;
                }
                .card{
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    text-align: center;
                    background-color: #f1f1f1;
                }
            </style>

            <div class="column">
                <div class="card">
                    <img src="${this._movie.poster_path}">
                    <h2>${this._movie.original_title}</h2>
                    <p>Released Date: ${this._movie.release_date}</p>
                </div>
            </div>
            
        `;
    }
}

customElements.define('movie-item', MovieItem);