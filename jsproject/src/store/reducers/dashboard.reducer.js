import {
    CARD_CLICK,
    ADD_MOVIE_CLICK,
    FORM_ADD_MOVIE,
    FORM_CANCEL_MOVIE,
    MOVIE_DATA_BACKEND,
    GET_MOVIE_DATA
} from './../actions';

const initialState = {

    movies: []
}

export function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE_DATA:
            return {
                ...state,
                movies: action.payload
            };


            // case ADD_MOVIE_CLICK:
            //     return {
            //         // state,
            //         // form: !state.form
            //     };

            // case FORM_ADD_MOVIE:
            //     return {
            //         // ...state,
            //         // values: [...state.values, action.payload]
            //     };

            // case FORM_CANCEL_MOVIE:
            //     return {
            //         // ...state,
            //         // values: [...state.values, action.payload]
            //     };

        default:
            return state;
    }
}