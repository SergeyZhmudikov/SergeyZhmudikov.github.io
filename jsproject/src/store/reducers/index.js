import { combineReducers } from 'redux';

import { movieDataReducer } from './moviedata.reducer';
import { showDataReducer } from './showdata.reducer';
export const appReducers = combineReducers({

    movieData: movieDataReducer,
    showData: showDataReducer
});