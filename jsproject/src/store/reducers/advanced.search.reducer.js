import {
    OPEN_ADVANCED_SEARCH,
    CLOSE_ADVANCED_SEARCH,
    TOGGLE_ADVANCED_SEARCH
} from './../actions';

const initialState = {
    state: 'INITIAL',
    isSearchOpen: false
}

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_ADVANCED_SEARCH:
            return {
                state,
                isSearchOpen: true
            };

        case CLOSE_ADVANCED_SEARCH:
            return {
                state,
                isSearchOpen: false
            };

        case TOGGLE_ADVANCED_SEARCH:
            return {
                state,
                isSearchOpen: !state.isSearchOpen
            }

        default:
            return state;
    }
}