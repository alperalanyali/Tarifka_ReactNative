import {StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        
        
        margin:20,
        
    },
    image:{
        width:320,
        height:200,
        alignSelf:'center',
        borderRadius:20
    },
    textView:{
        position: 'absolute',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        left:7,
        right:7,
        bottom: 0,
        backgroundColor:'rgba(0,0,0,0.5)',
        padding:10
    },
    text:{
        textAlign:'right',
        fontWeight:'bold',
        color:'white'
    }
});