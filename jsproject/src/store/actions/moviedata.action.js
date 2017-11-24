import {
    MOVIE_DATA_BACKEND,
    ADD_MOVIE
} from './moviedata.types';

export function movieBackend() {
    return {
        type: MOVIE_DATA_BACKEND



    }
}
export function addMovie(payload) {
    return {
        type: ADD_MOVIE,
        payload
    }
}