import React from "react"
import { Text, TouchableOpacity, View } from "react-native"



const ButtonBuy = ()=>{
    return(
        
        <View style={{padding:25,height:"25%",justifyContent:"center",alignItems:"center",justifyContent:"center",alignItems:"center",}}>
        <TouchableOpacity style={{height:100,width:100,borderRadius:50,backgroundColor:"#2e4055",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"#FFF",fontSize:26,fontFamily: 'ManropeBold',textAlign:"center"}}>
         BUY
          </Text>
        </TouchableOpacity>
        </View>
    )
}
export default ButtonBuy;