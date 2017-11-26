import {
    OPEN_ADVANCED_SEARCH,
    CLOSE_ADVANCED_SEARCH,
    TOGGLE_ADVANCED_SEARCH
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