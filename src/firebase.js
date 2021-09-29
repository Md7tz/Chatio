import firebase from 'firebase/app'; 
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDMzXUQrVRkH8xNX_B_gOx6N_gjkurFrl4",
  authDomain: "chatio-657c2.firebaseapp.com",
  projectId: "chatio-657c2",
  storageBucket: "chatio-657c2.appspot.com",
  messagingSenderId: "485771860492",
  appId: "1:485771860492:web:2b28174f80cce5adb0ac29"
}).auth();