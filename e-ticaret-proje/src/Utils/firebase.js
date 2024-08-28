import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK2ujdIvFFsk3Y2UXHIapG4JM-Ye3CywM",
  authDomain: "e-ticaret-a814d.firebaseapp.com",
  projectId: "e-ticaret-a814d",
  storageBucket: "e-ticaret-a814d.appspot.com",
  messagingSenderId: "1014929292432",
  appId: "1:1014929292432:web:298f11952aed9f81a4ec15",
  measurementId: "G-Z1MY98Z0R0",
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const DB = getFirestore();
const AUTH = getAuth();

export { DB, AUTH };
