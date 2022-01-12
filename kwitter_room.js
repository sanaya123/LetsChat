// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArGNhwm9GqCU8a75HjgpTidAUum2SXfdo",
  authDomain: "lets-chat-webapp-abefb.firebaseapp.com",
  databaseURL: "https://lets-chat-webapp-abefb-default-rtdb.firebaseio.com",
  projectId: "lets-chat-webapp-abefb",
  storageBucket: "lets-chat-webapp-abefb.appspot.com",
  messagingSenderId: "573813164210",
  appId: "1:573813164210:web:ff3ee15293c94d1de261ab",
  measurementId: "G-H8BX91YPBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);