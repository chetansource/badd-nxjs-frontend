'use client'
import { GoogleAuthProvider, signInWithPopup, getAuth, User, UserCredential } from "firebase/auth";
import { createContext, useEffect, useContext, useState, ReactNode } from "react";
import firebase_app from "../firebase_config";

// firebase auth instance
const auth = getAuth(firebase_app)

export interface AuthContextType { 
    googleLogin: () => Promise<UserCredential|void>,
    signOut: () => Promise<void>,
    user: User | null,
    getToken: () => Promise<string | null>;
}

interface AuthProviderProps {
    children: ReactNode;
}

//create context
const AuthContext = createContext<AuthContextType>({
    googleLogin: async () => undefined,
    signOut: async () => {},
    user: null,
    getToken: async () => null,
})

//create provider
export const AuthContextProvider = ({ children }: AuthProviderProps) => {
    
    const [user, setUser] = useState<User | null>(null)

    const googleLogin = async () => { 
        const provider = new GoogleAuthProvider()
        try {
            const login = await signInWithPopup(auth, provider)
            return login 
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    }

    const signOut = async ():Promise<void> => { 
        try {
            return auth.signOut();
        } catch (error) {
            console.error("Error signing out with Google", error);
        }
    }
    const getToken = async (): Promise<string | null> => {
        if (user) {
            try {
                return await user.getIdToken(true); // Force refresh the token
            } catch (error) {
                console.error("Error refreshing token:", error);
                return null;
            }
        }
        return null;
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async(user) => {
            if (user) {
                await user.getIdToken(true); // Refresh the token initially
                setUser(user);
            } else {
                setUser(null);
            }
        })
        return () => unsubscribe()
     }, [])

    return (
        <AuthContext.Provider value={{ googleLogin, signOut, user, getToken }}>
            {children}
        </AuthContext.Provider>
    )
}

//custom hook
export const UserAuth = () => {
    return useContext(AuthContext)
}
