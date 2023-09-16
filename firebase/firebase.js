import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAJeM_JMABn_AEYsRobA--PVb4FgK2IYI",
  authDomain: "clone-f960a.firebaseapp.com",
  projectId: "clone-f960a",
  storageBucket: "clone-f960a.appspot.com",
  messagingSenderId: "1077063971490",
  appId: "1:1077063971490:web:79b76360f1b2e8588d9dfb",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
