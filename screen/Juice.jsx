
import React from 'react'
import Headerback from '../components/home/Headerback';
import BackgroundJuice from '../components/juice/backgroudJuice';
import BodyJuice from '../components/juice/BodyJuice';
import ButtonBuy from '../components/juice/ButtonBuy';




const Juice = ({navigation,route})=>{
    const {juice} = route.params;
    return (

        <BackgroundJuice photo={juice.photo}>  
          <Headerback navigation={navigation}/>
          <BodyJuice name= {juice.name} price={juice.price}/>
          <ButtonBuy/>
        </BackgroundJuice>
    );
}
export default Juice;