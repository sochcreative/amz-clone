import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf92Fk9E3vP4X8V0LyO9do1nGSOWuyx14",
  authDomain: "clone-ad99d.firebaseapp.com",
  projectId: "clone-ad99d",
  storageBucket: "clone-ad99d.appspot.com",
  messagingSenderId: "412731576596",
  appId: "1:412731576596:web:4d153f6c81682e52e13201",
  measurementId: "G-RQEFYH8Z3E"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };