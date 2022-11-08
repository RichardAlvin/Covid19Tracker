import '../component/nav-bar.js';
import '../component/banner-hero.js';
import '../component/rated-movie.js';
import MovieSource from '../data/movie-source';
import RatedMovieSource from '../data/rated-movie-source.js';
 
const main = async () => {
    //const searchElement = document.querySelector('search-bar');
    //const movieListElement = document.querySelector('club-list');
    const ratedMovieElement = document.querySelector('rated-movie');

    // const onButtonSearchClicked = async () => {
    //     try{
    //         const result = await MovieSource.searchMovie(searchElement.value);
    //         renderResult(result);
    //     }catch(message){
    //         fallbackResult(message);
    //     }
    // }

    //get rated-movie
    const ratedMovie = await MovieSource.getAllRatedMovie();
    ratedMovieElement
    //renderResult(ratedMovie);

    const renderResult = results => {
        ratedMovieElement.clubs = results;
    }

    const fallbackResult = message =>{
        ratedMovieElement.renderError(message);
    }

    //searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;