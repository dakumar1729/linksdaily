import React, { setState, useContext } from "react";
import { View, SafeAreaView } from "react-native";
import Text from "@kaloraat/react-native-text";

import FooterTabs from "../components/nav/FooterTabs";


export default function Posts() {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Text> Posts Screen</Text>
            <View style={{
                flex: 1,
                justifyContent: "flex-end"
            }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    )
}