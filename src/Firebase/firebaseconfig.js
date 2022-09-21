// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2BMj6deu8i997QJs6Mgz0ahOhz_4Kyt4",
  authDomain: "clone-98fa7.firebaseapp.com",
  projectId: "clone-98fa7",
  storageBucket: "clone-98fa7.appspot.com",
  messagingSenderId: "282879352488",
  appId: "1:282879352488:web:044106cf59b7645d30ec9d",
  measurementId: "G-6QS196VZ8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);