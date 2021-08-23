import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    useMovieDetails(movie.id);
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

        </ScrollView>

    )
}
const styles = StyleSheet.create({
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