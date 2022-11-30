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
                :host{
                    width: 20%;
                    background: #fff;
                    border: 1px solid #ccc;
                    margin-bottom: 50px;
                    transition: 0.3s;
                }

                :host a{
                    text-decoration:none;
                    color: black;
                }

                .card-img{
                    text-align: center;
                    color: #fff;
                }

                .card-img img{
                    width:100%;
                    min-height: 250px;
                    max-height: 250px;
                }

                .card-body {
                    text-align: center;
                    font-size: 18px;
                }

                .card-body h1{
                    font-size: 24px;
                }

                .card-body p{
                    font-size: 14px;
                }

                :host(:hover) {
                    transform: scale(1.05);
                    box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
                }

                @media screen and (max-width: 1000px) {
                    :host {
                        width: 40%;
                    }
                }
                
                @media screen and (max-width: 620px) {
                    :host{
                        width: 80%;
                    }
                }
            </style>
            
            <a href="#">
                <div class="card-img" style="position:relative">
                    <img src="https://image.tmdb.org/t/p/w300/${this._movie.poster_path}" alt="...">
                    <p style="position: absolute; top: 10px; right: 10px; font-size:14px; padding: 3px 12px; border-radius: 25px; color:#eb3d3d; background-color:#f7d883"><i class="fa fa-heart-o" aria-hidden="true"></i></p>
                </div>
                <div class="card-body">
                    <h1 class="card-title">${this._movie.original_title}</h1>
                    <p class="card-text">Released Date: ${this._movie.release_date}</p>
                </div>
            </a>
        `;
    }
}

customElements.define('movie-item', MovieItem);