import {
    DO_ADVANCED_SEARCH,
    GET_MOVIE_DATA

} from '../actions';



const advancedSearchMiddlewear = store => next => action => {

    if (action.type === DO_ADVANCED_SEARCH) {
        let adSearchMovieConfig = store.getState().search;
        console.log('adSearchMovieConfig', adSearchMovieConfig)
        let movies = store.getState().movieData.movies;
        // console.log('moviesq', moviesq)

        let result = movies
            .filter((item) => {
                return item.overview.indexOf(adSearchMovieConfig.overviewMovieAdv) !== -1;
            })
            // .filter((item) => {
            //     return item.name.indexOf(adSearchMovieConfig.titleMovieSAdv) !== -1;
            // })

        store.dispatch({
            type: GET_MOVIE_DATA,
            payload: result
        });
    }


    return next(action);
};

export default advancedSearchMiddlewear;