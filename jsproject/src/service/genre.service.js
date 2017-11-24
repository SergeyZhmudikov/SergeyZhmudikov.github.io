import {
    DataService
} from './data.service';
import { mdbUrl } from "./url.api.js";

export class GenreService {
    constructor() {
        this.link = mdbUrl.genresUrl;
    }

    saveGenreLS() {
        let service = new DataService();
        service.getData(this.link).then((response) => {
            let genresArray = JSON.parse(response).genres;
            let genresvalue = JSON.stringify(genresArray);
            localStorage.setItem("genre", genresvalue);
        });
    }

    getGenresLS() {
        let genresvalue = localStorage.getItem("genre");
        let genres = JSON.parse(genresvalue);
        return genres;
    }
}