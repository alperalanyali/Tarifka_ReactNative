import React from 'react';
import {View,Text,TouchableWithoutFeedback,Image} from 'react-native';

import styles from './MealCard-styles';
const MealCard = ({meal,onSelect})=>{    
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
           <View style={styles.container}>
           <Image style={styles.image} source={{uri:meal.strMealThumb}}  accessibilityLabel={"dd"}/>
            <View style={styles.textView}>
                <Text style={styles.text}>{meal.strMeal}</Text>
            </View>
           </View>
        </TouchableWithoutFeedback>   
    )
}
export default MealCard;