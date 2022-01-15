import React from 'react'
import { ImageBackground } from 'react-native';

const BackgroundJuice  = ({children,photo})=>{
return(    
    <ImageBackground   style={{height:"100%",width:"100%",}}
    source={{uri:photo}}>
        {children}
        </ImageBackground>
);
}
export default BackgroundJuice;