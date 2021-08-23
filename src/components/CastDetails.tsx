import React from 'react'
import { Cast } from '../interfaces/creditsInterface'
import { Image, Text, View } from 'react-native';


interface Props {
    actor: Cast
}


export const CastDetails = ({ actor }: Props) => {


    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={{ marginBottom: 50,marginHorizontal:5 }} >

            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 10
                },
                shadowOpacity: 0.25,
                shadowRadius: 7,
                elevation: 9
            }} >
                {
                    actor.profile_path && (
                        <Image
                            source={{
                                uri
                            }}
                            style={{ width: 50, height: 50, borderRadius: 10 }}
                        />
                    )
                }

                <View style={{ marginHorizontal: 10 }} >
                    <Text
                        style={{ fontSize: 18, fontWeight: 'bold' }}
                    >{actor.name}
                    </Text>
                    <Text
                        style={{ fontSize: 16, opacity: 0.7 }}
                    >{actor.character}
                    </Text>
                </View>
            </View>
        </View>

    )
}
