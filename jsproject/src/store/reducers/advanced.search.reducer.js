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
} from './../actions';

const initialState = {

    isSearchOpen: false,
    genresMovieAdv: [],
    adultMovieAdv: '',
    titleMovieSAdv: '',
    overviewMovieAdv: ''

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


        case MOVIE_GENRE_SEARCH_CHANGE:
            return {
                ...state,
                genresMovieAdv: [...state.genresMovieAdv, action.payload]
            }


        case MOVIE_ADULT_SEARCH_CHANGE:
            return {
                ...state,
                adultMovieAdv: !state.adultMovieAdv
            }



        case MOVIE_TITLE_SEARCH_CHANGE:
            return {
                ...state,
                titleMovieSAdv: action.payload
            }

        case MOVIE_OVERVIEW_SEARCH_CHANGE:
            return {
                ...state,
                overviewMovieAdv: action.payload
            }



        default:
            return state;
    }
}