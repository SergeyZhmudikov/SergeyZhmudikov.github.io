import {
    GENRE_DATA_INIT,
    GET_GENRE_DATA
} from '../actions';

import { DataService } from "../../service/data.service.js";
import { mdbUrl } from "../../service/url.api"

let dataService = new DataService();

const genreDataApi = store => next => action => {
    if (action.type === GENRE_DATA_INIT) {
        dataService.getData(mdbUrl.genresUrl).then((result) => {
            let genres = JSON.parse(result).genres;
            let data = genres;
            console.log(data)
            store.dispatch({
                type: GET_GENRE_DATA,
                payload: data
            });
        });
    }
    return next(action);
}

export default genreDataApi;