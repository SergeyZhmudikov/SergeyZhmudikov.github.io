import {
    OPEN_FORM,
    TOGGLE_FORM,
    CLOSE_FORM
} from './../actions';

const initialState = {

    isFormOpen: false
}

export function formReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_FORM:
            return {
                state,
                isFormOpen: true
            };

        case CLOSE_FORM:
            return {
                state,
                isFormOpen: false
            };

        case TOGGLE_FORM:
            return {
                state,
                isFormOpen: !state.isFormOpen
            }

        default:
            return state;
    }
}