import {
    GET_GENRE_DATA,
    GENRE_DATA_INIT
} from '../actions';

const initialState = {
    state: 'INITIAL',
    genre: []
}

export function genreReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GENRE_DATA:
            return {
                ...state,
                genre: action.payload
            }

        default:
            return state;
    }
}