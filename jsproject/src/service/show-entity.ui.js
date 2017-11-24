import {
    DataService
} from './data.service';

import {
    ShowEntityDto
} from './show-entity.dto';
import { mdbUrl } from "./url.api.js";

export class ShowEntityUI {
    constructor() {
        this.dataService = new DataService();
        this.link = mdbUrl.showUrl;
    }

    getSHowEntity() {
        return this.dataService.getData(this.link)
            .then(result => {

                let entity = JSON.parse(result).results;
                let show = entity.map((item) => {
                    return new ShowEntityDto(item);
                });
                return show;
            });
    }
}