import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  /* -------------------------------
    google Sign In 
    -------------------------------------
    */
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, GoogleProvider)
      
  };

  /* -------------------------------
    create user with email 
    -------------------------------------
    */

  const handleEmailSignIn = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        // ..
      });
  };

  /* -------------------------------
    keep user 
    -------------------------------------
    */

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // ...
      }
    });
  }, []);

  /* -------------------------------
    Sign Out 
    -------------------------------------
    */

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    setUser,
    error,
    setError,
    signInUsingGoogle,
    handleSignOut,
    handleEmailSignIn,
  };
};

export default useFirebase;
