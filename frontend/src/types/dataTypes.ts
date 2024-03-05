interface Model {
    id:number;
}

export interface Actor extends Model {
    actor_id:number;
    first_name:string;
    last_name:string;
}

export interface Film extends Model {
    film_id:number;
    title:string;
    description:string;
    release_year:number;
    length:number;
    rating:string
}

export interface FilmCount {
    first_name:string,
    last_name:string,
    no_of_films:number,
}
