import {
    MOVIE_DATA_BACKEND,
    GET_MOVIE_DATA,
    ADD_MOVIE,
    ADD_MOVIE_TO_LIBRARY,
    MOVIE_WAS_DELETE_FROM_LIBRARY
} from './../actions';

const initialState = {

    movies: []
}

export function movieDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA:
            return {
                ...state,
                movies: action.payload
            };
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            };


            // case ADD_MOVIE_TO_LIBRARY:
            //     return {
            //         ...state,
            //         movies: state.movies.map(item =>
            //             (item.id === action.payload.id) ? {...item, isInLibrary: true } :
            //             item)
            //     }

            // case MOVIE_WAS_DELETE_FROM_LIBRARY:
            //     return {
            //         ...state,
            //         movies: state.movies.map(item =>
            //             (item.id === action.payload.id) ? {...item, isInLibrary: false } :
            //             item)
            //     }

        default:
            return state;
    }
}