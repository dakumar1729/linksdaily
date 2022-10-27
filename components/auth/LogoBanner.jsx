import React from "react";
import { View,Text, Image } from "react-native";

const LogoBanner = () =>{
return(
    <View style={{ alignItems: 'center',justifyContent: "center" }}>
       <Image source={require("../../assets/images/snapingan_logo_white.png")} style={{
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // // width: '100%', 
        // // height: '25%'
       }}/> 
    </View>

    )
}
export default LogoBanner;