// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtoVjO-JK8WlbV1vHj0dmqucONQW8O-Jw",
  authDomain: "nativefirst-bd312.firebaseapp.com",
  projectId: "nativefirst-bd312",
  storageBucket: "nativefirst-bd312.appspot.com",
  messagingSenderId: "562971762160",
  appId: "1:562971762160:web:fb182ba156a45c7e6dd135"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentification = getAuth(app)