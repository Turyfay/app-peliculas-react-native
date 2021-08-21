import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const {peliculasCine,isLoading} = useMovies();
    const {top} = useSafeAreaInsets();
    console.log(peliculasCine[2]?.title);

    if(isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <View style={{marginTop:top + 20}}>
            <MovieCard
            movie={peliculasCine[0]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});