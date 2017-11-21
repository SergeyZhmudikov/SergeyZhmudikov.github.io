import {
    MOVIE_DATA_BACKEND,
    GET_MOVIE_DATA
} from './../actions';

const initialState = {
    state: 'INITIAL',
    movies: []
}

export function movieDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA:
            return {
                ...state,
                movies: action.payload
            };


        default:
            return state;
    }
}