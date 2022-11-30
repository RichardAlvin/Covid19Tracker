class MovieSource{
    static getAllRatedMovie() {
        return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=b6fd205761475b546ea6858bbe273a71&language=en-US&page=1`)
            .then(response =>{
                return response.json();
            })
            .then(responseJson =>{
                if(responseJson.error){
                    return Promise.reject(`Error when get top rated movie`);
                }else{
                    return Promise.resolve(responseJson.results);
                }
            })
    };

    static getAllPopularMovie(){
        return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b6fd205761475b546ea6858bbe273a71&language=en-US&page=1`)
            .then(response =>{
                return response.json();
            })
            .then(responseJson =>{
                if(responseJson.error){
                    return Promise.reject(`Error when get top latest movie`);
                }else{
                    return Promise.resolve(responseJson.results);
                }
            })
    };

    static searchMovie(keyword){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b6fd205761475b546ea6858bbe273a71&language=en-US&query=${keyword}&page=1&include_adult=false`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.error){
                    return Promise.reject(`${keyword} is not found`);
                }else{
                    return Promise.resolve(responseJson.results);
                }
            });
    };
}

export default MovieSource;