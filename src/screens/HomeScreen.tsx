import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext,useEffect } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';

import { getImageColors } from '../helpers/getColores';
import { GradientContext } from '../context/GradientContext';


const windowWidth = Dimensions.get('window').width;
//Interface
interface Props extends StackScreenProps<any, any> { };



export const HomeScreen = ({ navigation }: Props) => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const {setMainColors} = useContext(GradientContext);

    const getPosterColors = async (index: number) =>{

        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        const [primary = 'green',secondary = 'orange'] = await getImageColors(uri);

        setMainColors({
            primary,
            secondary
        });
    

    }
    useEffect(() => {
        if(nowPlaying.length > 0){
            getPosterColors(0);
        }
    }, [nowPlaying])


    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <GradientBackground>
            <ScrollView>
                <View style={{ marginTop: top + 20 }}>
                    {/*  <MovieCard
                movie={peliculasCine[0]}
                /> */}
                    <View
                        style={{ height: 440 }}
                    >
                        <Carousel
                            data={nowPlaying}
                            renderItem={({ item }: any) => (<MovieCard movie={item} />)}
                            sliderWidth={windowWidth}
                            itemWidth={300}
                            inactiveSlideOpacity={0.9}
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>


                    {/* Pelicula populares */}
                    <HorizontalSlider title='Popular' movies={popular} />
                    <HorizontalSlider title='Top Rated' movies={topRated} />
                    <HorizontalSlider title='upcoming' movies={upcoming} />

                </View>
            </ScrollView>
        </GradientBackground>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});