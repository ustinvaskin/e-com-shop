import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// our congif from firebase project
const config = {
  apiKey: "AIzaSyCo0xBFA8_SfapMFDuB8xXqIiWldnwsgWg",
  authDomain: "db-crown-147bf.firebaseapp.com",
  databaseURL: "https://db-crown-147bf.firebaseio.com",
  projectId: "db-crown-147bf",
  storageBucket: "db-crown-147bf.appspot.com",
  messagingSenderId: "74417657620",
  appId: "1:74417657620:web:1bP4d8ff3622d6f515b9401",
  measurementId: "G-JDB7BXJT3W",
};

// passing our userAuth and extra info from an object
export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return; // if an object doesn't exist, then return from a function
  // else create userRef and snapShot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot); // getting snapShot to see an id and additional info
  // if there is no data for the user with userAuth uid, then -> create a user using set method
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("erroe creating a user", err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

// declearing auth and fire
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// signInWithGoogle that will pop up our provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
