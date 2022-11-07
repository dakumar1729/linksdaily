import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@kaloraat/react-native-text";
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { Divider } from '@rneui/themed';


export const Tab = ({ name, text, handlePress, screenName, routeName }) => {
    const activeScreenColor = screenName === routeName && '#10D45E';
    return (
        <TouchableOpacity onPress={handlePress}>
            <MaterialIcons name={name} size={25} style={{
                marginBottom: 3,
                alignSelf: 'center',
            }}
                color={activeScreenColor}
            />
            <Text color={activeScreenColor}>{text}</Text>
        </TouchableOpacity>
    )
}

export default function FooterTabs() {
    const navigation = useNavigation();
    const route = useRoute()
    console.log("Route===========>", route)
    return (
        <>
            <Divider width={1} />
            <View style={{
                flexDirection: "row",
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between"
            }}>
                <Tab name="home" text="Home" color="black" handlePress={() => navigation.navigate('Home')} screenName="Home" routeName={route.name} r />
                <Tab name="post-add" text="Posts" color="black" handlePress={() => navigation.navigate('Posts')} screenName="Posts" routeName={route.name} r />
                <Tab name="format-list-numbered" text="Links" color="black" handlePress={() => navigation.navigate('Links')} screenName="Links" routeName={route.name} r />
                <Tab name="supervised-user-circle" text="Account" color="black" handlePress={() => navigation.navigate('Account')} screenName="Account" routeName={route.name} r />
            </View>
        </>
    )
}
