import {

    ADD_MOVIE_TO_LIBRARY,
    ADD_SHOW_TO_LIBRARY,
    MOVIE_IN_LIBRARY,
    SHOW_IN_LIBRARY

} from '../actions';

const libraryMotionsMiddlware = store => next => action => {
    console.log(action.type);
    if (action.type === ADD_MOVIE_TO_LIBRARY) {
        let myLibStr = localStorage.getItem("library");
        console.log('get library', myLibStr);
        let item = action.payload;

        if (!myLibStr) {
            var tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("library", tempArrayStr);
        } else {
            var myLib = JSON.parse(myLibStr);
            myLib.push(item);
            let arrstr = JSON.stringify(myLib);
            localStorage.removeItem("library");
            localStorage.setItem("library", arrstr);
        }
        store.dispatch({
            type: MOVIE_IN_LIBRARY,
            payload: item
        });

    }







    return next(action);
}

export default libraryMotionsMiddlware;