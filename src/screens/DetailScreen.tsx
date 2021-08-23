import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const {isLoading,movieFull,cast} = useMovieDetails(movie.id);

    

    
    return (
        <ScrollView>
            <View style={styles.imageContainer} >
                <Image
                    source={{ uri }}
                    style={styles.posterImage}

                />
            </View>
            <View style={styles.marginContainer} >
                <Text style= {styles.subTitle} >{movie.original_title}</Text>
                <Text style={styles.title} >{movie.title}</Text>
            </View>
            
                    {
                        isLoading 
                        ? <ActivityIndicator size={35} color='grey' style={{marginTop:10}} />
                        :<MovieDetails movieFull={movieFull!} cast={cast} />
                    }       
           
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.70,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 9
    },
    posterImage: {
        flex: 1,

        height: screenHeight * 0.5
    },
    marginContainer: {
        marginHorizontal:20,
        marginTop:20,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 16,
        opacity:0.6
    }
});