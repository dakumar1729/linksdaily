import React, { setState, useContext } from "react";
import { View, SafeAreaView } from "react-native";
import Text from "@kaloraat/react-native-text";

import FooterTabs from "../components/nav/FooterTabs";
import { AuthContext } from "../context/auth";

export default function Account() {
    const [state, setState] = useContext(AuthContext)
    console.log("state========>", state)
    const { token, id, userID, firstName, lastName, emailID, phoneNumber, gender, dpURL, profileID, createdAt } = state.data
    return (
        <SafeAreaView style={{
            flex: 1
        }}>

            <View>
                <View>
                    <Text title bold>{firstName}</Text>
                    <Text title bold>{lastName}</Text>
                    <Text>{emailID}</Text>
                    <Text>{phoneNumber}</Text>
                </View>
            </View>
        </SafeAreaView>

    )
}