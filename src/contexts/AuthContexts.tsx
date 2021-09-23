import {createContext, ReactNode} from 'react';
import {useState, useEffect} from 'react';
import {onAuthStateChanged, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

import{ auth } from '../service/firebase';


type User ={
    id: string,
    name: string,
    avatar: string
  }

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
  }

type AuthContextProviderPros = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);






export function AuthContextProvider(props: AuthContextProviderPros){
    const [user, setUser] = useState<User>();

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,user =>{
      if (user){
        const {displayName, photoURL, uid} = user
            

      if(!displayName || !photoURL){
        throw new Error("Missing information from Google Account")
            }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
      }
    })
    return ()=>{
      unsubscribe()
    }
  }, [])
  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
        
    const result = await signInWithPopup(auth, provider)
    if(result.user){
      const {displayName, photoURL, uid} = result.user
            

      if(!displayName || !photoURL){
        throw new Error("Missing information from Google Account")
            }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
        
  }
  
    return(
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}