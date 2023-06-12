import React from 'react';
import {Text,View,FlatList,ActivityIndicator,StyleSheet} from 'react-native';
import {API_URL} from '../../configure'
import useFetchData from '../../hooks/useFetchData/useFetchData';
import CategoryCard from '../../components/Cards/CategoryCard/CategoryCard';
const Category = ({navigation})=>{
    const apiURL = API_URL +"list.php?c=list"
    const {data,loading,error} = useFetchData(apiURL)
    
    if(loading){
        <ActivityIndicator size='large'/>
    }
    if(error){
        return (
            <Text>{error}</Text>
        )
    }
    const handleCategorySelect = (categoryName)=>{
        navigation.navigate("Meal",{categoryName});
    }
    const renderCategory = ({item}) => <CategoryCard category={item} onSelect={()=> handleCategorySelect(item.strCategory)}/>
    return(
        <View style={styles.container}>
        <FlatList
            data={data.meals}
            renderItem={renderCategory}
        />
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange'
    }
})
export default Category;