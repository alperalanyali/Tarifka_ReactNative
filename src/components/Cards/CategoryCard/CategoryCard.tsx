import React from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard-styles'
const CategoryCard = ({category,onSelect})=>{        
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title}>{category.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;