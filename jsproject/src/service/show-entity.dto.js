export class ShowEntityDto {
    constructor(entity) {
        this.name = entity.name || '';
        this.id = entity.id || '';
        this.poster = entity.poster_path || '';
        this.poster = entity.poster_path || '';
        this.overview = entity.overview || '';
        this.popularity = entity.popularity || '';
        this.voteaverage = entity.vote_average || '';
        this.genre = entity.genre_ids || '';
    }


}