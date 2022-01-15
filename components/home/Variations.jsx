import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Juices } from "../../dummy_data/dummyData";
import Juice from "../../screen/Juice";
import Variation from "./Variation";

const Variations = ({navigation})=>{
    return (
        <View style={{height:"45%",flexDirection:"column"}}>
        <Text style={{color:"#FFF",fontSize:26,fontFamily: 'ManropeBold',paddingHorizontal:25,paddingVertical:10}}>
        Variation
        </Text>
        <View style={{flexDirection:"row",height:"100%",width:"100%",justifyContent:"space-between",paddingHorizontal:25,marginVertical:10}}>

        {Juices.map(j =>{
            return(
                    <Variation j={j} navigation={navigation}/>
            );
        })}
        </View>
      </View>
    );
}

export default Variations;