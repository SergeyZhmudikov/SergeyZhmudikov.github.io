import {
    SHOW_DATA_BACKEND,
    ADD_SHOW
} from './showdata.types';

export function showBackend() {
    return {
        type: SHOW_DATA_BACKEND



    }
}
export function addShow(payload) {
    return {
        type: ADD_SHOW,
        payload
    }
}