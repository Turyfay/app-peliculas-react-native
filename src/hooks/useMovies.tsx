import { useEffect, useState } from "react";
import movieDB from '../api/movieApi';
import { MovieDB, Movie } from '../interfaces/movieInterface';

interface MovieState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}



export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [movieState, setMovieState] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: []
    })

    const getMovies = async () => {




        const nowPlayingPromise = movieDB.get<MovieDB>('/now_playing');
        const popularPromise = movieDB.get<MovieDB>('/popular');
        const topRatedPromise = movieDB.get<MovieDB>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDB>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ])

        setMovieState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results
        })


        setIsLoading(false);
    }




    useEffect(() => {
        //peliculas actuales
        getMovies();
    }, [])


    return {
        ...movieState,
        isLoading
    }

}
