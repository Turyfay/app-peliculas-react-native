import { useEffect, useState } from "react";
import movieDB from '../api/movieApi';
import { MovieDBNow, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasCine, setpeliculasCine] = useState<Movie[]>([])
    
    const getMovies = async () =>{
        const resp = await movieDB.get<MovieDBNow>('/now_playing');
        setpeliculasCine(resp.data.results);
        setIsLoading(false);
    }
    
    useEffect(() => {
        //peliculas actuales
        getMovies();
    }, [])
  

    return {
        peliculasCine,
        isLoading
    }

}
