import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: 'd562d41aa4de20e3323a4ed4cf325a90',
        language: 'es-ES'
    }
});

export default movieDB;