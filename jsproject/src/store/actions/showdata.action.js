import {
    SHOW_DATA_BACKEND
} from './showdata.types';

export function showBackend() {
    return {
        type: SHOW_DATA_BACKEND



    }
}
export function showView(show) {
    return {
        type: MENU_SHOW_CLICK,
        payload: show
    }
}