import {
    MENU_CLICK,
    MENU_MOVIE_CLICK,
    MENU_SERIAL_CLICK,
    MENU_LIBRARY_CLICK,
    MENU_SUPPORT_CLICK
} from './../actions';

const initialState = {

    menu: false,
    movie: false,
    serial: false,
    library: false,
    support: false
}

export function sidebarReducer(state = initialState, action) {
    switch (action.type) {
        case MENU_CLICK:
            return {
                state,
                menu: !state.menu

            };


        case MENU_MOVIE_CLICK:
            return {
                state,
                movie: !state.movie,
                menu: state.menu
            };

        case MENU_SERIAL_CLICK:
            return {
                state,
                serial: !state.serial
            };

        case MENU_LIBRARY_CLICK:
            return {
                state,
                library: !state.library
            };

        case MENU_SUPPORT_CLICK:
            return {
                state,
                support: !state.support
            };
        default:
            return state;
    }
}