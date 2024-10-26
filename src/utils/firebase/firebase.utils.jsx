// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Authentication
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgLc4YQE0EdBq0AkaX-5P4UVP52guMdkI",
  authDomain: "crown-clothing-db-b8e25.firebaseapp.com",
  projectId: "crown-clothing-db-b8e25",
  storageBucket: "crown-clothing-db-b8e25.appspot.com",
  messagingSenderId: "35613220929",
  appId: "1:35613220929:web:6fd2bad3a7b0f2db4ca6c0"
};

// Initialize Firebase
const firebaseApps = initializeApp(firebaseConfig);

// google authentication provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters(
  {
    prompt: 'select_account'
  }
);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);