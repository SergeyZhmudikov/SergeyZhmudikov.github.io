import {
    OPEN_ABOUT,
    CLOSE_ABOUT,
    TOGGLE_ABOUT
} from "./about.types";

export function openAbout(payload) {
    return {
        type: OPEN_ABOUT,
        payload
    }
}

export function closeAbout(payload) {
    return {
        type: CLOSE_ABOUT,
        payload
    }
}

export function toggleAbout(payload) {
    return {
        type: TOGGLE_ABOUT,
        payload
    }
}