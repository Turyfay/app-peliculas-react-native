import React from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { NavigationMovie } from './src/navigation/navigation';

 const App = () => {
  return (
    <NavigationContainer
    
    >
      <NavigationMovie/>
    </NavigationContainer>
  )
}


export default App;