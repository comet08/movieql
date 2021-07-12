import axios from 'axios';

const API_END_POINT = 'https://yts.mx/api/v2/list_movies.json?';

export const getMovies = (limit: Number, rating: Number) => {
    let REQUEST_URL = API_END_POINT;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    return axios.get(REQUEST_URL)
            .then((res) => res.data.data.movies);

}
