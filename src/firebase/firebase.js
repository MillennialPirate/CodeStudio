//eslint-disable-next-line
import firebase from "firebase";
import "firebase/auth";

var app = firebase.initializeApp({
    apiKey: "AIzaSyBBP1DAtSuLRdbPj5Ib398OBrTkb9mpeXI",
    authDomain: "codestudio-ca625.firebaseapp.com",
    projectId: "codestudio-ca625",
    storageBucket: "codestudio-ca625.appspot.com",
    messagingSenderId: "271245138515",
    appId: "1:271245138515:web:7bf38a67068631461504a6",
    measurementId: "G-M8C9ZMJFED"
});

export const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
export default app;
export const db = app.firestore();