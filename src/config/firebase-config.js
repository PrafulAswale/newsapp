import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdw_i9R26Nwp3yIOeOWDlLz_VQ1SYL6c8",
  authDomain: "news-app-dd72e.firebaseapp.com",
  projectId: "news-app-dd72e",
  storageBucket: "news-app-dd72e.appspot.com",
  messagingSenderId: "946375970004",
  appId: "1:946375970004:web:3724aa3967931147d6bf41",
  measurementId: "G-N1EL6ZP13V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
