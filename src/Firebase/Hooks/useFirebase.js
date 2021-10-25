import { useEffect, useState } from "react";
import initializeAuth from "../Auth/firebase.init";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
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

    //observer function here
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, []);

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
        auth,
        setError,
    };
};

export default useFirebase;
