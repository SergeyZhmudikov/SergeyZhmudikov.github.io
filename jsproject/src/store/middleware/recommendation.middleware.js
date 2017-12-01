import { RECOM_DATA_BACKEND, GET_RECOM_DATA } from "../actions";
import { DataService } from "../../service/data.service.js";
import { MovieEntityDto } from "../../service/movie-entity.dto";
import { mdbUrl } from "../../service/url.api"

let dataMovie = new DataService();

const recomDataApi = store => next => action => {
    // console.log(action.type);


    if (action.type === RECOM_DATA_BACKEND) {
        // let recomFromLocal = localStorage.getItem("recommendation");
        // if (!recomFromLocal) {
        dataMovie.getData(mdbUrl.recomendUrl)
            .then((result) => {

                let arr = JSON.parse(result).results;
                // console.log(arr);
                let recom = arr.map((item) => {
                    return new MovieEntityDto(item);

                });
                let data = recom;
                console.log(data);
                // let recomendStr = JSON.parse(data);
                // localStorage.setItem('recommendation', recomendStr);

                store.dispatch({
                    type: GET_RECOM_DATA,
                    payload: data
                });

            });
    }




    return next(action);
};

export default recomDataApi;