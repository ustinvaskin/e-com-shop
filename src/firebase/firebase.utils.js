import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCo0xBFA8_SfapMFDuB8xXqIiWldnwsgWg",
    authDomain: "db-crown-147bf.firebaseapp.com",
    databaseURL: "https://db-crown-147bf.firebaseio.com",
    projectId: "db-crown-147bf",
    storageBucket: "db-crown-147bf.appspot.com",
    messagingSenderId: "74417657620",
    appId: "1:74417657620:web:1bP4d8ff3622d6f515b9401",
    measurementId: "G-JDB7BXJT3W"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  // Google auth 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'})
  // signInWithGoogle that will pop up our provider
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;

