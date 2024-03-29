
import React from 'react'
import { Image, StyleSheet,TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/navigation';

 interface Props {
    movie: Movie;
    width?: number;
    height?: number;
} 



type HomeScreenNavigationProps = StackNavigationProp<RootStackParams,'HomeScreen'>

export const MovieCard = ({ movie,height = 420,width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navegacion = useNavigation<HomeScreenNavigationProps>()

    return (
        <TouchableOpacity
            onPress={()=> {
                navegacion.navigate('DetailScreen',movie);
                
            }}
            activeOpacity={0.8}
            style={{
                height,
                width,
                marginHorizontal:2,
                paddingBottom: 20,
                paddingHorizontal:7
            }}
        >   
        <View
            style={styles.imageContainer}
            >
                <Image
                    source={{
                        uri
                    }}
                    style={styles.image}
                />
            </View>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 420,
        

    },
    imageContainer:{
        flex:1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10
    },
    image: {
        flex: 1,
        borderRadius: 20
    }
});