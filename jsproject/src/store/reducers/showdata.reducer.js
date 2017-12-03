import {
    SHOW_DATA_BACKEND,
    GET_SHOW_DATA,
    ADD_SHOW,
    ADD_SHOW_TO_LIBRARY,
    SHOW_WAS_DELETE_FROM_LIBRARY
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

        case ADD_SHOW_TO_LIBRARY:
            return {
                ...state,
                show: state.show.map(item =>
                    (item.id === action.payload.id) ? {...item, isInLibrary: true } :
                    item)
            }

        case SHOW_WAS_DELETE_FROM_LIBRARY:
            return {
                ...state,
                show: state.show.map(item =>
                    (item.id === action.payload.id) ? {...item, isInLibrary: false } :
                    item)
            }

        default:
            return state;
    }
}