import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from './middleware/logger.middleware.js';
import { appReducers } from './reducers';
import movieDataApi from './middleware/movie.middleware.js';
import showDataApi from './middleware/show.middleware.js';
import genreDataApi from './middleware/genre.middleware.js';
import addMovieMiddle from './middleware/addmovie.middleware.js';
import addShowMiddle from './middleware/addshow.middleware.js';
import libraryData from './middleware/library.middleware.js';
import libraryMotionsMiddlware from './middleware/library.motions.middleware.js';
import recomDataApi from './middleware/recommendation.middleware.js';
import advancedSearchMiddlewear from '../store/middleware/advancedsearch.middleware.js'


export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieDataApi,
        showDataApi,
        genreDataApi,
        addMovieMiddle,
        addShowMiddle,
        libraryData,
        libraryMotionsMiddlware,
        recomDataApi,
        advancedSearchMiddlewear
    )


)