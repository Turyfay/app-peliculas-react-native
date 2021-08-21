import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {

    const {peliculasCine,isLoading} = useMovies();

    console.log(peliculasCine[2]?.title);

    if(isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <View>
            <Text>Home</Text>
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