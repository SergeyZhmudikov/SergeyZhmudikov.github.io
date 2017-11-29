import {
    LIBRARY_DATA_INIT,
    GET_LIBRARY_DATA,
    ADD_MOVIE_TO_LIBRARY,
    ADD_SHOW_TO_LIBRARY,
    DELETE_MOVIE_FROM_LIBRARY,
    DELETE_SHOW_FROM_LIBRARY,
    MOVIE_WAS_DELETE_FROM_LIBRARY,
    SHOW_WAS_DELETE_FROM_LIBRARY
} from '../actions';

const initialState = {

    library: []
}

export function libraryReducer(state = initialState, action) {
    switch (action.type) {

        case GET_LIBRARY_DATA:
            return {
                ...state,
                library: action.payload
            }

        case ADD_MOVIE_TO_LIBRARY:
            return {
                ...state,
                library: [...state.library, action.payload]
            }

        case ADD_SHOW_TO_LIBRARY:
            return {
                ...state,
                library: [...state.library, action.payload]
            }

        case DELETE_MOVIE_FROM_LIBRARY:
            let newMovies = state.library.filter(v => v.id !== action.payload.id);
            let curLibString = JSON.stringify(newMovies);
            localStorage.removeItem('library');
            localStorage.setItem('library', curLibString);
            return {
                ...state,
                library: newMovies
            }

        case DELETE_SHOW_FROM_LIBRARY:
            let newShows = state.library.filter(v => v.id !== action.payload.id);
            let curLibShowString = JSON.stringify(newShows);
            localStorage.removeItem('library');
            localStorage.setItem('library', curLibShowString);
            return {
                ...state,
                library: newShows
            }



        default:
            return state;
    }
}