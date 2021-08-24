import React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { NavigationMovie } from './src/navigation/navigation';
import { GradientProvider } from './src/context/GradientContext';



const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      {children}
    </GradientProvider>
  )
}


const App = () => {
  return (
    <NavigationContainer

    >

      <AppState>
        <NavigationMovie />
      </AppState>


    </NavigationContainer>
  )
}


export default App;