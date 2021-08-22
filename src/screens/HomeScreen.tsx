import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View,ScrollView, Dimensions  } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MovieCard } from '../components/MovieCard';
import { useMovies } from '../hooks/useMovies';


const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {

    const {peliculasCine,isLoading} = useMovies();
    const {top} = useSafeAreaInsets();
    
    if(isLoading){
        return(
            <View style={styles.container}>
                <ActivityIndicator color='red' size={100} />
            </View>
        )
    }

    return (
        <ScrollView>        
                <View style={{marginTop:top + 20}}>
            {/*  <MovieCard
                movie={peliculasCine[0]}
                /> */}
                <View
                    style={{height:440}}
                >
                    <Carousel
                        data = {peliculasCine}
                        renderItem= {({item}:any)=>( <MovieCard movie={item} /> )}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>


                {/* Pelicula populares */}
                <HorizontalSlider title='En cine' movies={peliculasCine} />
                <HorizontalSlider  movies={peliculasCine} />
            
            </View>
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    }
});