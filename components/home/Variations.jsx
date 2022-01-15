import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { Juices } from "../../dummy_data/dummyData";

const Variations = ({navigation})=>{
    return (
        <View style={{height:"45%",flexDirection:"column"}}>
        <Text style={{color:"#FFF",fontSize:26,fontFamily: 'ManropeBold',paddingHorizontal:25,paddingVertical:10}}>
        Variation
        </Text>
        <View style={{flexDirection:"row",height:"100%",width:"100%",justifyContent:"space-between",paddingHorizontal:25,marginVertical:10}}>
        <TouchableOpacity       
        onPress={()=>{
        navigation.navigate("Juice",{
                juice: Juices[0]
            })
        }}
        style={{height:"54%",width:"32%"
        ,justifyContent:"center",
        alignItems:"center"
        }}>
       <ImageBackground   
       style={{height:"98%",width:"98%",}} imageStyle={{borderRadius:8}} 
        source={{uri:"https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"}}/>
  
        <Text style={{color:"#FFF",fontSize:16,fontFamily: 'ManropeSemiBold'}}>
        Strawberry
        </Text>
         </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=>{
            navigation.navigate("Juice",{
                juice: Juices[1]
            })
        }}
        style={{height:"54%",width:"32%",
        justifyContent:"center",
        alignItems:"center"
        }}>
        <ImageBackground    style={{height:"98%",width:"98%",}} imageStyle={{borderRadius:8}} 
         source={{uri:"https://images.unsplash.com/photo-1625479143703-b7c6206f251a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"}}/>
        <Text style={{color:"#FFF",fontSize:16,fontFamily: 'ManropeSemiBold'}}>
        Berry
        </Text>
        </TouchableOpacity>
         <TouchableOpacity 
         onPress={()=>{
            navigation.navigate("Juice",{
                juice: Juices[2]
            })
        }}
         style={{height:"54%",width:"32%",
         justifyContent:"center",
        alignItems:"center"
        }}>
       <ImageBackground  height="60%" width="50%"  style={{height:"98%",width:"98%",}} imageStyle={{borderRadius:8}}     
       source={{uri:"https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}}/>
               <Text style={{color:"#FFF",fontSize:16,fontFamily: 'ManropeSemiBold'}}>
        Orange
        </Text>
         </TouchableOpacity>
        </View>
      </View>
    );
}

export default Variations;