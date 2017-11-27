import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from './middleware/logger.middleware.js';
import { appReducers } from './reducers';
import movieDataApi from './middleware/movie.middleware.js';
import showDataApi from './middleware/show.middleware.js';
import genreDataApi from './middleware/genre.middleware.js';
import addMovieReducer from './middleware/addmovie.middleware.js';


export const appStore = createStore(
    appReducers,
    applyMiddleware(
        movieDataApi,
        showDataApi,
        genreDataApi,
        addMovieReducer)


)