import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        margin:20,
    },
    foodImage:{
        width:Dimensions.get("window").width,
        height:300,
        backgroundColor:'darkgray',
        marginBottom:20,
    },
    inner_container:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',                
    },
    mealName:{
        fontSize:24,
        fontWeight:'bold',
        color:'#F24C3D'
    },
    area:{
        color:'#F24C3D',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'left'
    },
    category:{
        color:'#F24C3D',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'left'
    },
    desc:{
        fontSize:14,
    },
    youtubeContainer:{
        backgroundColor:'red',
        marginTop:10,
        padding:10,
        borderRadius:20
        
    },
    youtubeTitle:{
        color:'white',
        fontSize:20,
        alignSelf:'center',
        fontWeight:'bold'
    }
})