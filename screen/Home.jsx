import React from "react";
import BackgroundHome from "../components/home/backgroudHome";
import Body from "../components/home/Body";
import Header from "../components/home/Header";
import Variations from "../components/home/Variations";


const Home = ({navigation})=>{
    return(
        <BackgroundHome>
        <Header/>
        <Body/>
        <Variations navigation={navigation}/>
        </BackgroundHome>
    );
}
export default Home;