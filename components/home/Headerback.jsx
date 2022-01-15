import React from "react";
import { View,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Headerback = ({navigation}) =>{
return(
    <View style={{height:"15%",flexDirection:"row",justifyContent:"space-between",padding:15}}>
    <StatusBar hidden/>
    <View style={{justifyContent:"center",alignItems:"center"}}>
    <Ionicons onPress={()=>{navigation.goBack()}} name="chevron-back-sharp" size={40} color="#FFF" />
    </View>
    <View style={{justifyContent:"center",alignItems:"center"}}>
      <Text style={{color:"#FFF",fontSize:30,fontFamily: 'ManropeBold', }}>
      The Juice    
      </Text>
      </View>
    </View>

)

}
export default Headerback; 