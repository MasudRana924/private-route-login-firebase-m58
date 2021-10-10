import { useEffect, useState } from 'react';
import initializeAuthentication from './../Firebase/Firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => {
setUser({})
            })
    }
    return {
        user, error, googleSignIn, logOut
    }

}
export default useFirebase