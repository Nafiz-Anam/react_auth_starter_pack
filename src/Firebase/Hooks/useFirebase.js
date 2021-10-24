import { useState } from "react";
import initializeAuth from "../Auth/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
} from "firebase/auth";

//initializing firebase here
initializeAuth();

const useFirebase = () => {
    // states we need
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    // auth for firebase
    const auth = getAuth();
    // providers for different login methods
    const googleProvider = new GoogleAuthProvider();
    // login functions here
    //google login
    const loginUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // log out function here
    const logout = () => {
        signOut(auth).then(() => {
            setUser("");
        });
    };
    // all my return value here
    return {
        loginUsingGoogle,
        user,
        logout,
        error,
        setUser,
        setError,
        auth,
    };
};

export default useFirebase;
