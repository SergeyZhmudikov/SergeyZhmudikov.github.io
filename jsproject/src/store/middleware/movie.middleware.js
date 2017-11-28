import { MOVIE_DATA_BACKEND, GET_MOVIE_DATA } from "../actions";
import { DataService } from "../../service/data.service.js";
// import { MovieEntityDto } from "../../service/movie-entity.dto";
// import { mdbUrl } from "../../service/url.api";
import { MovieEntityUI } from "../../service/movie-entity.ui";


let dataMovie = new MovieEntityUI();

const movieDataApi = store => next => action => {
    // console.log(action.type);


    if (action.type === MOVIE_DATA_BACKEND) {
        let moviesFromLocal = localStorage.getItem("movies");
        if (!moviesFromLocal) {
            dataMovie.getMovieEntity()
                .then((movie) => {

                    let data = movie;
                    console.log('backend-movie', data);

                    let userMovies = localStorage.getItem("userMovies");


                    if (userMovies) {
                        let customMovies = JSON.parse(userMovies);
                        data = movie.concat(customMovies);
                        let dataString = JSON.stringify(data);
                        localStorage.setItem('movies', dataString);
                        console.log('backend-added', dataString);


                        store.dispatch({
                            type: GET_MOVIE_DATA,
                            payload: data
                        });

                    }

                    // let dataString = JSON.stringify(data);
                    // localStorage.setItem('movies', dataString);
                    // console.log('backend-added', dataString);


                    store.dispatch({
                        type: GET_MOVIE_DATA,
                        payload: data
                    });

                });
        } else {

            let moviesFromLocal = localStorage.getItem('movies');
            let movies = JSON.parse(moviesFromLocal);
            store.dispatch({
                type: GET_MOVIE_DATA,
                payload: movies
            });
        }
    }

    return next(action);
};

export default movieDataApi;




















// import { MOVIE_DATA_BACKEND, GET_MOVIE_DATA } from "../actions";
// import { DataService } from "../../service/data.service.js";
// import { MovieEntityDto } from "../../service/movie-entity.dto";
// import { mdbUrl } from "../../service/url.api"

// let dataMovie = new DataService();

// const movieDataApi = store => next => action => {
//     // console.log(action.type);


//     if (action.type === MOVIE_DATA_BACKEND) {
//         dataMovie.getData(mdbUrl.movieUrl)
//             .then((result) => {

//                 let arr = JSON.parse(result).results;
//                 console.log(arr);
//                 let movies = arr.map((item) => {
//                     return new MovieEntityDto(item);

//                 });
//                 let data = movies;




//                 store.dispatch({
//                     type: GET_MOVIE_DATA,
//                     payload: data
//                 });

//             });
//     }

//     return next(action);
// };

// export default movieDataApi;