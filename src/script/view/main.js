import '../component/nav-bar.js';
import '../component/banner-hero.js';
import '../component/movie-footer';
import '../component/rated-movie-list.js';
import '../component/popular-movie-list.js';
import '../component/upcoming-movie-list.js';
import '../component/search-movie-list.js';
import MovieSource from '../data/movie-source';
 
const main = async () => {
    const ratedMovieElement = document.querySelector('rated-movie-list');
    const popularMovieElement = document.querySelector('popular-movie-list');
    const upcomingMovieElement = document.querySelector('upcoming-movie-list');
    
    //get rated-movie
    const ratedMovie = await MovieSource.getAllRatedMovie();
    ratedMovieElement.movies = ratedMovie;
    
    //get latest-movie
    const popularMovie = await MovieSource.getAllPopularMovie();
    popularMovieElement.movies = popularMovie;

    //get upcoming-movie
    const upcomingMovie = await MovieSource.getAllUpcomingMovie();
    upcomingMovieElement.movies = upcomingMovie;
};
 
export default main;