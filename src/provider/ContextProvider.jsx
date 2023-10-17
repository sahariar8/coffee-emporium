import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthContext = createContext();


const ContextProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState();
    //create User
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

//userLog In

    const userSignIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup (auth,googleProvider)
    }
    const githubSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const userLogOut = ()=>{
            setLoading(true)
            return signOut(auth)
    }



    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
                    console.log('form state change',currentUser)
                    setUser(currentUser);
                    setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {user,createUser,userSignIn,googleSignIn,githubSignIn,userLogOut,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;