import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useContext} from "react";
import { View, TouchableOpacity, SafeAreaView, Alert } from "react-native" ; 
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';


import { AuthContext } from "../../context/auth";

const HeaderTabs = () => {
    const [state, setState] = useContext(AuthContext)

    const singOut = async () =>{
        setState({token : '', userID : ''})
        await AsyncStorage.removeItem('@auth')
    }
    return(
        <SafeAreaView>
            <TouchableOpacity onPress={singOut}>
            <MaterialIcons name='logout' size={25 } style={{
                marginBottom: 3,
                alignSelf: 'center',
                }} color = 'red' />

            </TouchableOpacity>
        </SafeAreaView>
    )

}
export default HeaderTabs