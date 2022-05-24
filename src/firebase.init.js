// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFM2Y4IA-te3dfLiYvDN3dgKE_Yynsql8",
  authDomain: "computer-garage-4cd3b.firebaseapp.com",
  projectId: "computer-garage-4cd3b",
  storageBucket: "computer-garage-4cd3b.appspot.com",
  messagingSenderId: "419444574762",
  appId: "1:419444574762:web:f393730a58ff15526c9153",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
