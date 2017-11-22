import {
    MENU_CLICK,
    MENU_MOVIE_CLICK,
    MENU_SHOW_CLICK,
    MENU_LIBRARY_CLICK,
    MENU_SUPPORT_CLICK
} from './sidebar.types';

export function menuView(menu) {
    return {
        type: MENU_CLICK,
        payload: menu
    }
}

export function movieView(movie) {
    return {
        type: MENU_MOVIE_CLICK,
        payload: movie
    }
}

export function showView(show) {
    return {
        type: MENU_SHOW_CLICK,
        payload: show
    }
}

export function libraryView(payload) {
    return {
        type: MENU_LIBRARY_CLICK,
        payload
    }
}
export function supportView(payload) {
    return {
        type: MENU_SUPPORT_CLICK,
        payload
    }
}