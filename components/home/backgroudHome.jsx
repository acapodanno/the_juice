import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const BackgroundHome  = ({children})=>{
return(    
<LinearGradient
    colors={['#171b26', '#2e4055']}
    style={{ flex: 1}}
    start={{ x: 0, y: 1 }}
    end={{ x: 1, y: 1 }}
>

{children}
</LinearGradient>
);
}
export default BackgroundHome;