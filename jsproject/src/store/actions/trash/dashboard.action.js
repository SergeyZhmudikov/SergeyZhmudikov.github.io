import {

    CARD_CLICK,
    ADD_MOVIE_CLICK,
    ABOUT_CLICK,
    PRICING_CLICK,
    BLOG_CLICK,
    FORM_ADD_MOVIE,
    FORM_CANCEL_MOVIE,
    MOVIE_DATA_BACKEND
} from './dashboard.types';

export function movieBackend() {
    return {
        type: MOVIE_DATA_BACKEND



    }
}




// export function cardView(payload) {
//     return {
//         type: CARD_CLICK,
//         payload
//     }
// }

// export function formView(payload) {
//     return {
//         type: ADD_MOVIE_CLICK,
//         payload
//     }
// }

// export function aboutView(payload) {
//     return {
//         type: ABOUT_CLICK,
//         payload
//     }
// }

// export function pricingView(payload) {
//     return {
//         type: PRICING_CLICK,
//         payload
//     }
// }
// export function blogView(payload) {
//     return {
//         type: BLOG_CLICK,
//         payload
//     }
// }

// export function formAddMovie(payload) {
//     return {
//         type: FORM_ADD_MOVIE,
//         payload
//     }
// }

// export function formCancelMovie(payload) {
//     return {
//         type: FORM_CANCEL_MOVIE,
//         payload
//     }
// }