import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../components/firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);


const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    
}

const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    return signOut(auth);
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,

    }

    

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;