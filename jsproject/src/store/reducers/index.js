import { combineReducers } from 'redux';

import { movieDataReducer } from './moviedata.reducer';
import { showDataReducer } from './showdata.reducer';
import { sidebarReducer } from './sidebar.reducer';
import { formReducer } from './form.reducer';
import { genreReducer } from './genre.reducer';
import { searchReducer } from './advanced.search.reducer';
import { libraryReducer } from './library.reducer';
import { aboutReducer } from './about.reducer';
import { recomDataReducer } from './recomdata.reducer';
export const appReducers = combineReducers({

    movieData: movieDataReducer,
    showData: showDataReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    genre: genreReducer,
    search: searchReducer,
    library: libraryReducer,
    about: aboutReducer,
    recomData: recomDataReducer

});