import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

/**
 * .env.local
 * 
VITE_APIKEY=AIzaSyBxBpuTFV-SpT6BOKRuyFSE3EolreEyKjo
VITE_AUTHDOMAIN=dragon-news-website-c911a.firebaseapp.com
VITE_PROJECTID=dragon-news-website-c911a
VITE_STORAGEBUCKET=dragon-news-website-c911a.appspot.com
VITE_MESSAGINGSENDERID=917513756018
VITE_APPID=1:917513756018:web:4fbe35617a3e25b34411eb
 * 
 * 
 */

/**
 * 
 * 
const firebaseConfigLocal = {
  apiKey: "AIzaSyBxBpuTFV-SpT6BOKRuyFSE3EolreEyKjo",
  authDomain: "dragon-news-website-c911a.firebaseapp.com",
  projectId: "dragon-news-website-c911a",
  storageBucket: "dragon-news-website-c911a.appspot.com",
  messagingSenderId: "917513756018",
  appId: "1:917513756018:web:4fbe35617a3e25b34411eb",
};
* 
*
*/
