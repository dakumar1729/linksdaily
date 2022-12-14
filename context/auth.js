import React, {useState, useEffect, createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext =  createContext();

const AuthProvider = (props) =>{
    const [state, setState] = useState({
        user: null,
        token: ""
    });

    axios.defaults.baseURL = 'https://8db8574bd7df.in.ngrok.io'
    useEffect(() =>{
        const loadFromAsycStorage = async () => {
            let authdata = AsyncStorage.getItem('@auth')
            console.log("authdata================>",authdata)
            const as = JSON.parse(JSON.stringify(authdata))
            console.log("as---->", as)
            setState({...state, user:as.userID, token: as.token})
        };
        loadFromAsycStorage()
    }, [])
    return (
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider}