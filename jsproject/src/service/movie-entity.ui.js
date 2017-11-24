import {
    DataService
} from './data.service';

import {
    MovieEntityDto
} from './movie-entity.dto';
import { mdbUrl } from "./url.api.js";

export class MovieEntityUI {
    constructor() {
        this.dataService = new DataService();
        this.link = mdbUrl.movieUrl;
    }

    getMovieEntity() {
        return this.dataService.getData(this.link)
            .then(result => {

                let entity = JSON.parse(result).results;
                let movie = entity.map((item) => {
                    return new MovieEntityDto(item);
                });
                return movie;
            });
    }
}