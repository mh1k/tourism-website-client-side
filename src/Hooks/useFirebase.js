import initAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";


initAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState([]);
    const [isLodding, setIsLodding] = useState(true)

    const signInUsingGoogle = () => {
        setIsLodding(true);
        // return signInWithPopup(auth, googleProvider)
        return signInWithPopup(auth, googleProvider)
           


    };

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // console.log("inside", user);
                setUser(user)
            }
            else {

            }
            setIsLodding(false);
        })
    }, []);

    // Log out/ Sign out
    const logOut = () => {
        setIsLodding(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLodding(false))
    };

    return {
        user,
        logOut,
        signInUsingGoogle,
        isLodding
    };
}

export default useFirebase;