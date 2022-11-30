import '../component/nav-bar.js';
import '../component/banner-hero.js';
import '../component/rated-movie-list.js';
import '../component/popular-movie-list.js';
import MovieSource from '../data/movie-source';
 
const main = async () => {
    //const searchElement = document.querySelector('search-bar');
    //const movieListElement = document.querySelector('club-list');
    const ratedMovieElement = document.querySelector('rated-movie-list');
    const popularMovieElement = document.querySelector('popular-movie-list');

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
    ratedMovieElement.movies = ratedMovie;
    
    //get latest-movie
    const popularMovie = await MovieSource.getAllPopularMovie();
    popularMovieElement.movies = popularMovie;

    //renderResult(ratedMovie);

    // const renderResult = results => {
    //     ratedMovieElement.clubs = results;
    // }

    // const fallbackResult = message =>{
    //     ratedMovieElement.renderError(message);
    // }

    //searchElement.clickEvent = onButtonSearchClicked;
};
 
export default main;