import '../component/nav-bar.js';
import '../component/search-bar.js';
import '../component/movie-footer';
import '../component/search-movie-list.js';
import MovieSource from '../data/movie-source';
 
const search = async () => {
    const searchElement = document.querySelector('search-bar');
    const searchMovieElement = document.querySelector('search-movie-list');

    const onButtonSearchClicked = async () => {
        try{
            const result = await MovieSource.searchMovie(searchElement.value);
            renderResult(result);
        }catch(message){
            fallbackResult(message);
        }
    }

    const searchMovie = await MovieSource.searchMovie("The");
    searchMovieElement.movies = searchMovie;

    const renderResult = results => {
        searchMovieElement.movies = results;
    }

    const fallbackResult = message =>{
        searchMovieElement.renderError(message);
    }

    searchElement.clickEvent = onButtonSearchClicked;
};
 
export default search;