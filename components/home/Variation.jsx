import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";


const Variation = ({j,navigation})=>{
    return(
        <TouchableOpacity       
        onPress={()=>{
        navigation.navigate("Juice",{
            juice: j
        })
    }}
    style={{height:"54%",width:"32%"
    ,justifyContent:"center",
    alignItems:"center"
    }}>
   <ImageBackground   
   style={{height:"98%",width:"98%",}} imageStyle={{borderRadius:8}} 
    source={{uri:j.photo}}/>

    <Text style={{color:"#FFF",fontSize:16,fontFamily: 'ManropeSemiBold'}}>
    {j.name}
    </Text>
     </TouchableOpacity>
    )
}

export default Variation;