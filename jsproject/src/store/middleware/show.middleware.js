import { SHOW_DATA_BACKEND, GET_SHOW_DATA, MENU_SHOW_CLICK } from "../actions";
import { DataService } from "../../service/data.service.js";
import { ShowEntityDto } from "../../service/show-entity.dto";
import { mdbUrl } from "../../service/url.api"

let dataMovie = new DataService();

const showDataApi = store => next => action => {
    console.log(action.type);


    if (action.type === SHOW_DATA_BACKEND) {
        dataMovie.getData(mdbUrl.showUrl)
            .then((result) => {

                let arr = JSON.parse(result).results;

                let movies = arr.map((item) => {
                    return new ShowEntityDto(item);

                });
                let data = movies;


                store.dispatch({
                    type: GET_SHOW_DATA,
                    payload: data
                });
                console.log(data);
            });
    }

    return next(action);
};

export default showDataApi;