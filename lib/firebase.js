import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBP9eT1mPziw77u-dI-HIFeTR0uu1UT_t0",
  authDomain: "nextfire-87e83.firebaseapp.com",
  projectId: "nextfire-87e83",
  storageBucket: "nextfire-87e83.appspot.com",
  messagingSenderId: "577367052970",
  appId: "1:577367052970:web:702b13304f945a63e036d3",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
