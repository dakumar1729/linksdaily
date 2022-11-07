import React, { setState, useContext } from "react";
import { View, SafeAreaView } from "react-native";
import Text from '@kaloraat/react-native-text'
import { AuthContext } from "../context/auth";

import FooterTabs from "../components/nav/FooterTabs";

const Home = () => {
    const [state, setState] = useContext(AuthContext)
    console.log("state========>", state)
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <Text> {JSON.stringify(state, null, 4)}</Text>
            <View style={{
                flex: 1,
                justifyContent: "flex-end"
            }}>
                <FooterTabs />
            </View>
        </SafeAreaView>
    )
}

export default Home;