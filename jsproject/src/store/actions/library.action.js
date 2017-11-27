import {
    LIBRARY_DATA_INIT,
    ADD_MOVIE_TO_LIBRARY,
    ADD_SHOW_TO_LIBRARY,
    DELETE_MOVIE_FROM_LIBRARY,
    DELETE_SHOW_FROM_LIBRARY
} from './library.types';

export function initLibrary() {
    return {
        type: LIBRARY_DATA_INIT
    }
}

export function addMovieToLibrary(payload) {
    return {
        type: ADD_MOVIE_TO_LIBRARY,
        payload
    }
}

export function addShowToLibrary(payload) {
    return {
        type: ADD_SHOW_TO_LIBRARY,
        payload
    }
}

export function deleteMovieFromLibrary(payload) {
    return {
        type: DELETE_MOVIE_FROM_LIBRARY,
        payload
    }
}

export function deleteShowFromLibrary(payload) {
    return {
        type: DELETE_SHOW_FROM_LIBRARY,
        payload
    }
}