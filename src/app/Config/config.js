import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAUd5QbISKJjPq0k0V39todqr6n_BnIy24",
    authDomain: "kawa-2099a.firebaseapp.com",
    projectId: "kawa-2099a",
    storageBucket: "kawa-2099a.appspot.com",
    messagingSenderId: "28175966739",
    appId: "1:28175966739:web:bd093e0717b12967fe55e6"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };