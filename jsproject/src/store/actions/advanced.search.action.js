import {
    OPEN_ADVANCED_SEARCH,
    CLOSE_ADVANCED_SEARCH,
    TOGGLE_ADVANCED_SEARCH,
    DO_ADVANCED_SEARCH,
    MOVIE_GENRE_SEARCH_CHANGE,
    MOVIE_ADULT_SEARCH_CHANGE,
    MOVIE_TITLE_SEARCH_CHANGE,
    MOVIE_OVERVIEW_SEARCH_CHANGE,
    MOVIE_SAVE_SEARCH_CONFIG

} from "./advanced.search.types";

export function openSearch(payload) {
    return {
        type: OPEN_ADVANCED_SEARCH,
        payload
    }
}

export function closeSearch(payload) {
    return {
        type: CLOSE_ADVANCED_SEARCH,
        payload
    }
}

export function toggleSearch(payload) {
    return {
        type: TOGGLE_ADVANCED_SEARCH,
        payload
    }
}
export function doSearch(payload) {
    return {
        type: DO_ADVANCED_SEARCH,
        payload
    }
}

export function advancedMovieGenre(payload) {
    return {
        type: MOVIE_GENRE_SEARCH_CHANGE,
        payload
    }
}


export function advancedMovieAdult(payload) {
    return {
        type: MOVIE_ADULT_SEARCH_CHANGE,
        payload
    }
}

export function advancedMovieTitle(payload) {
    return {
        type: MOVIE_TITLE_SEARCH_CHANGE,
        payload
    }
}

export function advancedMovieOverview(payload) {
    return {
        type: MOVIE_OVERVIEW_SEARCH_CHANGE,
        payload
    }
}

export function saveMovieSearchConfig() {
    return {
        type: MOVIE_SAVE_SEARCH_CONFIG
    }
}