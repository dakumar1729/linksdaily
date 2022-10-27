import React, {useState, useEffect, createContext} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const AuthContext =  createContext();

const AuthProvider = (props) =>{
    const [state, setState] = useState({
        user: null,
        token: ""
    });
    useEffect(() =>{
        const loadFromAsycStorage = async () => {
            let authdata = AsyncStorage.getItem('@auth')
            const as = JSON.parse(authdata)
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