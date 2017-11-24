/**
 * Logs all actions and states after they are dispatched.
 */
// import {
//     DataService
// } from '../../service/data.service.js';
// import { mdbUrl } from "../../service/url.api.js";
// import {
//     MovieEntityDto
// } from '../../service/movie-entity.dto';
//  import {MovieEntityUI} from '../../service/movie-entity.ui.js'


// const logger = store => next => action => {
//     console.group(action.type);
//     console.info('dispatching', action);
//     let result = next(action);

//     console.log('next state', store.getState());
//     console.groupEnd(action.type);
//     return result;
// };

// export default logger;


import { MOVIE_DATA_BACKEND, GET_MOVIE_DATA } from "../actions";
import { DataService } from "../../service/data.service.js";
import { MovieEntityDto } from "../../service/movie-entity.dto";
import { mdbUrl } from "../../service/url.api"

let dataMovie = new DataService();

const logger = store => next => action => {
    console.log(action.type);


    if (action.type === MOVIE_DATA_BACKEND) {
        dataMovie.getData(mdbUrl.movieUrl)
            .then((result) => {

                let arr = JSON.parse(result).results;

                let movies = arr.map((item) => {
                    return new MovieEntityDto(item);

                });
                let data = movies;


                store.dispatch({
                    type: GET_MOVIE_DATA,
                    payload: data
                });
                console.log(data);
            });
    }

    return next(action);
};

export default logger;