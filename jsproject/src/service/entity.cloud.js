import { MovieEntityUI } from "./movie-entity.ui";
import { ShowEntityUI } from "./show-entity.ui";

export class EntityCloud {
    constructor() {};

    MoviesLocal() {
        let entityMovieService = new MovieEntityUI();
        entityMovieService.getMovieEntity().then((movies) => {
            let filmString = JSON.stringify(movies);
            localStorage.setItem("Films", filmString);
        });
    }

    MoviesfromLocal() {
        let filmString = localStorage.getItem("Films");
        return JSON.parse(filmString);
    }

    ShowLocal() {
        let entityShowService = new ShowEntityUI();
        entityShowService.getSHowEntity().then((shows) => {
            let showString = JSON.stringify(shows);
            localStorage.setItem("Shows", showString);
        });
    }

    ShowfromLocal() {
        let showString = localStorage.getItem("Shows");
        return JSON.parse(showString);
    }
}