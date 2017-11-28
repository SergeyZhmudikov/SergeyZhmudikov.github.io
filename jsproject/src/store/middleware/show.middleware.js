import { SHOW_DATA_BACKEND, GET_SHOW_DATA } from "../actions";
import { DataService } from "../../service/data.service.js";
// import { ShowEntityDto } from "../../service/show-entity.dto";
// import { mdbUrl } from "../../service/url.api"
import { ShowEntityUI } from "../../service/show-entity.ui";


let dataMovie = new ShowEntityUI();

const showDataApi = store => next => action => {
    console.log(action.type);


    if (action.type === SHOW_DATA_BACKEND) {
        let showsFromLocal = localStorage.getItem("shows");
        if (!showsFromLocal) {
            dataMovie.getSHowEntity()
                .then((show) => {

                    let data = show;
                    console.log('backend-show', data);

                    let userShows = localStorage.getItem("userShows");

                    if (userShows) {
                        let customShows = JSON.parse(userShows);
                        data = show.concat(customShows);
                        let dataString = JSON.stringify(data);
                        localStorage.setItem('shows', dataString);

                        store.dispatch({
                            type: GET_SHOW_DATA,
                            payload: data
                        });
                    }
                    store.dispatch({
                        type: GET_SHOW_DATA,
                        payload: data
                    });

                });
        } else {
            let showsFromLocal = localStorage.getItem('shows');
            let shows = JSON.parse(showsFromLocal);
            store.dispatch({
                type: GET_SHOW_DATA,
                payload: shows
            });
        }
    }

    return next(action);
};

export default showDataApi;