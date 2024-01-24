// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9q8n_3oZrjtS61SPL6AdcRqaobv03IC4",
  authDomain: "homis-e489f.firebaseapp.com",
  projectId: "homis-e489f",
  storageBucket: "homis-e489f.appspot.com",
  messagingSenderId: "857673179276",
  appId: "1:857673179276:web:3600381ef63b0ae56c1ba9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;