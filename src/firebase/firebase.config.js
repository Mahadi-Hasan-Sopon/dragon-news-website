import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDouCkVTcKsvSSEirGoN86I2u96Z8ejUDA",
  authDomain: "first-firebase-app-1d293.firebaseapp.com",
  projectId: "first-firebase-app-1d293",
  storageBucket: "first-firebase-app-1d293.appspot.com",
  messagingSenderId: "910553313908",
  appId: "1:910553313908:web:6fe53134c2d1408e129721",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
