import { useState, useEffect } from 'react';
import movieDB from '../api/movieApi';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';


interface MovieDetails {
    movieFull?: MovieFull;
    cast: Cast[];
    isLoading: boolean;
}

export const useMovieDetails = (movieId:number) => {
   const [state, setstate] = useState<MovieDetails>({
       isLoading: true,
       movieFull:undefined,
       cast:[]
   });


    const getMovieDetail = async () =>{
        const respDetailsPromise = movieDB.get<MovieFull>(`${movieId}`);
        const respDetailsCreditsPromise = movieDB.get<CreditsResponse>(`${movieId}/credits`);

        const [movieDetailsResponse,castResp] = await Promise.all([
            respDetailsPromise,
            respDetailsCreditsPromise
        ]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsResponse.data,
            cast: castResp.data.cast
        });
        
    }


    useEffect(() => {
        getMovieDetail();
    }, [])

    return {
        ...state
    }

}
