import {
    LIBRARY_DATA_INIT,
    GET_LIBRARY_DATA
} from '../actions';

const libraryData = store => next => action => {
    if (action.type === LIBRARY_DATA_INIT) {
        let getLibrary = localStorage.getItem('library');
        if (getLibrary) {
            let library = JSON.parse(getLibrary);
            store.dispatch({
                type: GET_LIBRARY_DATA,
                payload: library
            });
        }
    }
    return next(action);
}

export default libraryData;