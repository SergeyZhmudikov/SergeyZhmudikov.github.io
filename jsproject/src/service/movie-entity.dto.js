export class MovieEntityDto {
    constructor(entity) {
        this.name = entity.title || '';
        this.id = entity.id || '';
        this.poster = 'https://image.tmdb.org/t/p/w500' + entity.poster_path || '';
        this.overview = entity.overview || '';
        this.popularity = entity.popularity || '';
        this.voteaverage = entity.vote_average || '';
        this.genre = entity.genre_ids || '';
    }


}