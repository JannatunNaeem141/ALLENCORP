// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrQaXrgC970ZumZTLM3rzc9ELMHKB0Kbs",
    authDomain: "corporate-sales-trainer.firebaseapp.com",
    projectId: "corporate-sales-trainer",
    storageBucket: "corporate-sales-trainer.appspot.com",
    messagingSenderId: "831492065793",
    appId: "1:831492065793:web:9647933cc0788d90550e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;