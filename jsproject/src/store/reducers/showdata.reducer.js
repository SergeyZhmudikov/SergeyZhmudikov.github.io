import {
    SHOW_DATA_BACKEND,
    GET_SHOW_DATA,
    ADD_SHOW
} from './../actions';

const initialState = {
    state: 'INITIAL',
    show: []
}

export function showDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SHOW_DATA:
            return {
                ...state,
                show: action.payload
            };
        case ADD_SHOW:
            return {
                ...state,
                show: [...state.show, action.payload]
            };

        default:
            return state;
    }
}