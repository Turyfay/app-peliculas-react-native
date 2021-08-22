import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MovieCard } from './MovieCard';


interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{
            ...styles.container,
            height: (title) ? 260 : 220
        }}>
            {
                title && <Text style={styles.title} >{title}</Text>
            }
            <FlatList
                data={movies}
                renderItem={({item}:any)=> 
                (
                <MovieCard movie={item} width={140} height={200} />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        marginLeft:10
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});