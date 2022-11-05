import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export const Tab = ({ name, text, handlePress }) => (
    <TouchableOpacity>
        <>
            <MaterialIcons name={name} size={25} style={{
                marginBottom: 3,
                alignSelf: 'center',
            }} onPress={handlePress}
            />
            <Text>{text}</Text>
        </>
    </TouchableOpacity>
)
export default function FooterTabs() {
    const navigation = useNavigation();
    return (
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between"
        }}>
            <Tab name="home" text="Home" color="black" handlePress={() => navigation.navigate('Home')} />
            <Tab name="post-add" text="Posts" color="black" handlePress={() => navigation.navigate('Posts')} />
            <Tab name="format-list-numbered" text="Links" color="black" handlePress={() => navigation.navigate('Links')} />
            <Tab name="supervised-user-circle" text="Account" color="black" handlePress={() => navigation.navigate('Account')} />
        </View>
    )
}
