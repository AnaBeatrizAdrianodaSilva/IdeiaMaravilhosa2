// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0JtW_PseTH2HJHIE4Py_JcRdd6e0lhMA",
  authDomain: "ideiamaravilhosa-4e2c6.firebaseapp.com",
  projectId: "ideiamaravilhosa-4e2c6",
  storageBucket: "ideiamaravilhosa-4e2c6.appspot.com",
  messagingSenderId: "818367165575",
  appId: "1:818367165575:web:ffc8c2baf309ff5fbe3422",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
