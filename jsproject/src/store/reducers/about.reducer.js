import {
    OPEN_ABOUT,
    TOGGLE_ABOUT,
    CLOSE_ABOUT
} from './../actions';

const initialState = {

    isAboutOpen: false
}

export function aboutReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_ABOUT:
            return {
                state,
                isAboutOpen: true
            };

        case CLOSE_ABOUT:
            return {
                state,
                isAboutOpen: false
            };

        case TOGGLE_ABOUT:
            return {
                state,
                isAboutOpen: !state.isAboutOpen
            }

        default:
            return state;
    }
}