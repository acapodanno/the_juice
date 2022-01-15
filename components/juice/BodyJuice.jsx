import React from 'react'
import { View,Text,Image} from "react-native";


const BodyJuice = ({name,price})=>{
return(
  <View style={{padding:25,height:"60%",justifyContent:"center",alignItems:"center"}}>
  <Image style={{height:180,width:100,tintColor:"#fff",marginVertical:15}} source = {require("../../assets/bubble-tea.png")}/>
  <Text style={{color:"#FFF",fontSize:26,fontFamily: 'ManropeBold',marginHorizontal:15}}>
    {name} Juice    
    </Text>
    <Text style={{color:"#FFF",fontSize:24,fontFamily: 'ManropeSemiBold',textAlign:"center",marginVertical:10}}>
    Blend of {name} with ice that makes your tried day feels very fresh again.   
    </Text>
    <Text style={{color:"#FFF",fontSize:26,fontFamily: 'ManropeBold',textAlign:"center",marginVertical:10}}>
    {price}£   
    </Text>
  </View>
)

}

export default BodyJuice;