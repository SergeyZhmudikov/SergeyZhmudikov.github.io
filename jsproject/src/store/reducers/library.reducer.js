import {
    LIBRARY_DATA_INIT,
    GET_LIBRARY_DATA,
    ADD_MOVIE_TO_LIBRARY,
    ADD_SHOW_TO_LIBRARY,
    DELETE_MOVIE_FROM_LIBRARY,
    DELETE_SHOW_FROM_LIBRARY
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


        default:
            return state;
    }
}