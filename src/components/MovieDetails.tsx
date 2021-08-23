import React from 'react'
import { Text, View } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import currencyFormate from 'currency-formatter';
import { CastDetails } from './CastDetails';
import { FlatList } from 'react-native-gesture-handler';


interface Props {
    movieFull: MovieFull;
    cast: Cast[]
}


export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }} >
                <Text

                >
                    {movieFull.genres.map(gen => gen.name).join(',')}
                </Text>


                {/* Historia */}
                <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }} >
                    Sinopsis
                </Text>
                <Text style={{ fontSize: 15 }} >
                    {movieFull.overview}
                </Text>

                {/* Presupuesto */}
                <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }} >
                    Presupuesto
                </Text>

                <Text>
                    {currencyFormate.format(movieFull.budget, { code: 'USD' })}
                </Text>

                {/* Actores */}
                <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }} >
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item:Cast)=>item.id.toString()}
                    renderItem={({item}) =><CastDetails actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />

                
            </View>
        </>

    )
}
