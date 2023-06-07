import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword ,GoogleAuthProvider,updateProfile, signOut, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app);

function AuthProvider({children}) {
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const googleprovider = new GoogleAuthProvider();
  const signIn = (email,password)=>{
    setLoading(true)
     return signInWithEmailAndPassword(auth, email, password);
  }
  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }
   
  // const updateUserProfile = (name, photo) => {
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photo,
  //   })
  // }

 
  // const signInwithGoogle = () =>{
  //   setLoading(true)
  //   return signInWithPopup(auth,googleprovider)
  // }


  useEffect(()=>{
     
    const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser) 
      console.log("Current User", currentUser)
      setLoading(false)
      
    })
    return (()=>{
      
      return unsubscribe()
    })
  },[])
  const authInfo ={
    user,
    loading,
    createUser,
    signIn, 
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
    {
      children
    }
    </AuthContext.Provider>
  )
}

export default AuthProvider