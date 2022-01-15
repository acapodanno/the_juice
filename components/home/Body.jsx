import React from 'react'
import { View,Text,Image} from "react-native";


const Body = ()=>{
return(
    <View style={{padding:25,height:"40%",justifyContent:"center",alignItems:"center",}}>
    <Image style={{height:120,width:100,tintColor:"#fff",marginVertical:15}} source = {require("../../assets/bubble-tea.png")}/>
      <Text style={{color:"#FFF",fontSize:24,fontFamily: 'ManropeMedium',}}>
      We provide a variety of fresh juices with various flavors. Get fresh juice easily.    
      </Text>
    </View>

)

}

export default Body;