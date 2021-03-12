// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCqW6m1DGDhXXwan83TDfrQnV4XiUKA8l0",
    authDomain: "clone-batyr.firebaseapp.com",
    projectId: "clone-batyr",
    storageBucket: "clone-batyr.appspot.com",
    messagingSenderId: "10000054199",
    appId: "1:10000054199:web:5d6210d4b9b9f895971a32",
    measurementId: "G-WMP1HJWVW6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
