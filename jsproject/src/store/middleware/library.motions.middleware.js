import {

    ADD_MOVIE_TO_LIBRARY,
    ADD_SHOW_TO_LIBRARY,
    MOVIE_IN_LIBRARY,
    SHOW_IN_LIBRARY,
    DELETE_MOVIE_FROM_LIBRARY,
    DELETE_SHOW_FROM_LIBRARY,
    MOVIE_WAS_DELETE_FROM_LIBRARY,
    SHOW_WAS_DELETE_FROM_LIBRARY,
    DELETE_ITEM_FROM_LIBRARY,
    ITEM_WAS_DELETE_FROM_LIBRARY

} from '../actions';

const libraryMotionsMiddlware = store => next => action => {
    console.log(action.type);
    if (action.type === ADD_MOVIE_TO_LIBRARY) {
        let myLibStr = localStorage.getItem("library");
        console.log('get library', myLibStr);
        let item = action.payload;

        if (!myLibStr) {
            let tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("library", tempArrayStr);
        } else {
            let myLib = JSON.parse(myLibStr);
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
    if (action.type === ADD_SHOW_TO_LIBRARY) {
        let myLibStr = localStorage.getItem("library");
        console.log('get library', myLibStr);
        let item = action.payload;

        if (!myLibStr) {
            let tempArray = [];
            tempArray.push(item);
            let tempArrayStr = JSON.stringify(tempArray);
            localStorage.setItem("library", tempArrayStr);
        } else {
            let myLib = JSON.parse(myLibStr);
            myLib.push(item);
            let arrstr = JSON.stringify(myLib);
            localStorage.removeItem("library");
            localStorage.setItem("library", arrstr);
        }
        store.dispatch({
            type: SHOW_IN_LIBRARY,
            payload: item
        });

    }


    if (action.type === DELETE_MOVIE_FROM_LIBRARY) {
        let item = action.payload;

        store.dispatch({
            type: MOVIE_WAS_DELETE_FROM_LIBRARY,
            payload: item
        });



    }


    if (action.type === DELETE_SHOW_FROM_LIBRARY) {
        let item = action.payload;

        store.dispatch({
            type: SHOW_WAS_DELETE_FROM_LIBRARY,
            payload: item
        });

    }
    if (action.type === DELETE_ITEM_FROM_LIBRARY) {
        let item = action.payload;

        store.dispatch({
            type: ITEM_WAS_DELETE_FROM_LIBRARY,
            payload: item
        });

    }
    return next(action);
}

export default libraryMotionsMiddlware;