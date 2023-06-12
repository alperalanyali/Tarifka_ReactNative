import React from 'react';
import {Text,View} from 'react-native';
import {API_URL} from '../../configure'
import useFetchData from '../../hooks/useFetchData/useFetchData';
const Category = ()=>{
    const apiURL = API_URL +"list.php?c=list"
    const {data,loading,error} = useFetchData(apiURL)
    console.log(data)
    if(error){
        return (
            <Text>{error}</Text>
        )
    }
    return(
        <View>
            <Text>Category</Text>
        </View>
    );
}

export default Category;