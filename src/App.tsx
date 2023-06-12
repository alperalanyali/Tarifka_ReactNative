import React from 'react';
import {Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from './pages/Category/Category';
import 'react-native-devsettings';
import Meal from './pages/Meal/Meal';
import MealDetail from './pages/MealDetail/MealDetail';
const Stack = createNativeStackNavigator();
const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Category" component={Category} options={{title:'Categories',headerTitleStyle:{fontWeight:'bold',color:'orange'}}}/>
        <Stack.Screen name="Meal" component={Meal} options={{title:"Meals",headerTitleStyle:{fontWeight:'bold',color:'orange'}}}/>
        <Stack.Screen name="MealDetail" component={MealDetail} options={{title:'Detail',headerTitleStyle:{fontWeight:'bold',color:'orange'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;