import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './pages/Category/Category';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;