import {
    GET_RECOM_DATA
} from './../actions';

const initialState = {

    recommend: []
}

export function recomDataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECOM_DATA:
            return {
                ...state,
                recommend: action.payload
            };



        default:
            return state;
    }
}