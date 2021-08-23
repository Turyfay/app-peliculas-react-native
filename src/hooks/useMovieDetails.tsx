import { useState, useEffect } from 'react';
import movieDB from '../api/movieApi';
import { MovieFull } from '../interfaces/movieInterface';


interface MovieDetails {
    cast: any;
    movieFull: MovieFull;
    isLoading: boolean;
}

export const useMovieDetails = (movieId:number) => {
   const [state, setstate] = useState<MovieDetails>();


    const getMovieDetail = async () =>{
        const resp = await movieDB.get<MovieFull>(`${movieId}`);
        console.log(resp.data.overview);
    }


    useEffect(() => {
        getMovieDetail();
    }, [])

    return {
        state
    }

}
