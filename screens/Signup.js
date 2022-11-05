import React, { useState, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import Text from '@kaloraat/react-native-text'
import axios from 'axios';
import { KeyboardAvoidingScrollView } from 'react-native-keyboard-avoiding-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import LogoBanner from '../components/auth/LogoBanner';
import { AuthContext } from '../context/auth';

const Signup = (props) => {
  const [firstName, setfirstName] = useState("anil")
  const [lastName, setlastName] = useState("kumar")
  const [emailID, setemailID] = useState("anil25@yopmail.com")
  const [phoneNumber, setphoneNumber] = useState("898989")
  const [gender, setgender] = useState("male")
  const [password, setPassword] = useState("1234")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useContext(AuthContext)


  const handleSubmit = async () => {
    setLoading(true)
    if (!firstName || !lastName || !emailID || !phoneNumber || !gender || !password) {
      alert("All fields are required")
      setLoading(false)
      return;
    }
    try {
      const body = { firstName, lastName, emailID, phoneNumber, gender, password, "countrycode": '+91' }
      console.log("sing up request body======>", body)
      const { data } = await axios.post(`/api/user-sign-up`, body, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      if (data.code === 200) {
        console.log("sign up scuess===>", data)
        alert('User registered, Please verify the email to Login')
        setLoading(false)
        props.navigation.navigate('Signin')

      } else {
        alert(data.message)
        setLoading(false)
      }
    } catch (err) {
      alert('User registration failed, please try again')
      console.log(JSON.stringify(err, undefined, 2))
      setLoading(false)
    }
  }

  const loadAsyncStoare = async()=>{
    let data = await AsyncStorage.getItem('@auth')
    console.log('from the staore----------------------------->',data)
  }
  loadAsyncStoare();
  return (
    <KeyboardAvoidingScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", }}>

      <View style={{ marginVertical: 100 }}>
        <LogoBanner />
        <UserInput
          name="First Name"
          value={firstName}
          setValue={setfirstName}
          autoCapitalize="words"
          autoCorrectc={false}
        />
        <UserInput
          name="Last Name"
          value={lastName}
          setValue={setlastName}
          autoCapitalize="words"
          autoCorrectc={false}
        />
        <UserInput
          name="E-Mail"
          value={emailID}
          setValue={setemailID}
          autoCompleteType="email"
          keyboardType="email-address"
        />
        <UserInput
          name="Phone Number"
          value={phoneNumber}
          setValue={setphoneNumber}
          autoCompleteType="number"
          keyboardType="phone-pad"
        />
        <UserInput
          name="Gender"
          value={gender}
          setValue={setgender}
        />
        <UserInput
          name="Password"
          value={password}
          setValue={setPassword}
          autoCompleteType="password"
          secureTextEntry={true}
        />
        <SubmitButton name='Sign Up' handleSubmit={handleSubmit} loading={loading} />
        <Text small center>Already Joined?  <Text onPress={() => props.navigation.navigate("Signin")} color="#ff2222"> Login</Text></Text>

      </View>

    </KeyboardAvoidingScrollView>
  )
}

export default Signup;
