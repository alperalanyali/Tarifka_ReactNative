import React from 'react';
import {Text,View,Image,ActivityIndicator,ScrollView,Pressable} from 'react-native';
import styles from './MealDetail-styles';
import useFetchData from '../../hooks/useFetchData/useFetchData';
import { API_URL } from '../../configure';
import { Linking } from 'react-native';

const MealDetail = ({route})=>{
    const {id} = route.params;
    const {data,loading,error} = useFetchData(API_URL+'lookup.php?i='+id);
    console.log(data.meals);
    if(loading){
        return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }
    if(error){
        return(
            <Text>{error}</Text>
        )
    }
    const handleOpenYoutube = (srcYoutube)=>{
        console.log(srcYoutube)
         Linking.openURL(srcYoutube)
    }
    return (
        <ScrollView style={styles.container}>          
            <Image style={styles.foodImage} source={{uri:data.meals[0].strSource}}/>
            <Text style={styles.mealName}>{data.meals[0].strMeal}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.area}>{data.meals[0].strArea}</Text>
                <Text style={styles.category}>{data.meals[0].strCategory}</Text>
            </View>
            <Text>{data.meals[0].strInstructions}</Text>
            <Pressable onPress={()=> handleOpenYoutube(data.meals[0].strYoutube)} style={styles.youtubeContainer}>
                <Text style={styles.youtubeTitle}>Watch Youtube</Text>
            </Pressable>
        </ScrollView>
    )
}

export default MealDetail;