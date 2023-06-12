import React from 'react';
import {Text,View,FlatList,StyleSheet,ActivityIndicator} from 'react-native';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import { API_URL } from '../../configure';
import MealCard from '../../components/Cards/MealCard/MealCard';
import { NavigationHelpersContext } from '@react-navigation/native';
const Meal = ({navigation,route})=>{
    const {categoryName} = route.params
    const {data,loading,error} = useFetchData(API_URL+"filter.php?c="+categoryName)
    
    const renderMeals = ({item}) => <MealCard meal={item} onSelect={() => handleSelectMeal(item.idMeal)}/>
    const  handleSelectMeal = (id)=>{
        navigation.navigate('MealDetail',{id});
    }
    if(loading){
        return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderMeals}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange'
    }
})
export default Meal;