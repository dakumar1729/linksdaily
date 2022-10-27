import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import Text from '@kaloraat/react-native-text'
import axios from 'axios';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import LogoBanner from '../components/auth/LogoBanner';

const Signin = (props) => {
  const [emailID, setemailID] = useState("anil25@yopmail.com")
  const [password, setPassword] = useState("1234")
  const [loading, setLoading] = useState(false)
  const host = 'https://48aabbe15f50.in.ngrok.io'
  const handleSubmit = async () => {
    setLoading(true)
    if (!emailID || !password) {
      alert("All fields are required")
      setLoading(false)
      return;
    }
    try {
      const body = { emailID, password}
      const { data } = await axios.post(`${host}/api/user-login`, body, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    if(data.code === 200){
    // save AsyncStorage
    console.log("data--->",data)
    await AsyncStorage.setItem('@auth', JSON.stringify(data.data))
      setLoading(false)
      alert('Login sucessful')
    } else {
      alert(data.message)
      setLoading(false)
    }
    } catch (err) {
      alert(err.message)
      setLoading(false)
    }
  }
  return (
    <KeyboardAvoidingScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", }}>

      <View style={{ marginVertical: 100 }}>
        <LogoBanner />
        <UserInput
          name="E-Mail"
          value={emailID}
          setValue={setemailID}
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <UserInput
          name="Password"
          value={password}
          setValue={setPassword}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <SubmitButton name='Login' handleSubmit={handleSubmit} loading={loading} />
        <Text small center>Not yet registered? <Text onPress = {() => props.navigation.navigate("Signup")} color="#ff2222"> Sing Up</Text></Text>
        <Text small center color="orange" style={{ marginTop: 10}}>Forgot Password</Text>

      </View>

    </KeyboardAvoidingScrollView>
  )
}

export default Signin;
